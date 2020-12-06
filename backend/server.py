from flask import Flask, request
import firebase_admin
from firebase_admin import credentials, firestore, auth
from flask_cors import CORS
import json
from datetime import date

'''
Backend API to connect client with Firebase database storing our alumni
'''

# initialize firebase sdk
cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

app = Flask(__name__)
CORS(app)

def getCurrentDate():
    today = date.today()
    return today.strftime("%m-%d-%Y")
    
def setUserToday(userRef, current_date, journal_entry, mood):
    today = {
        u'date': u'{}'.format(current_date),
        u'journal-entry': u'{}'.format(journal_entry),
        u'mood': u'{}'.format(mood)
    }
    userRef.set({u'today': today}, merge=True)

def updateCurrentData(userRef, user):
    previous_date = user["today"]["date"]
    current_date = getCurrentDate()
    if previous_date != current_date:
        yesterday = {
            "date": previous_date,
            "journal-entry": user["today"]["journal-entry"],
            "mood": user["today"]["mood"]
        }
        userRef.collection(u'data').add(yesterday)
        setUserToday(userRef, current_date, "", "")

'''
Return all resources in database
'''
@app.route('/resources')
def getResources():
    docs = db.collection(u'Resources').stream()
    print(docs)
    values = []
    for doc in docs:
        data = doc.to_dict()
        values.append(data)
    return json.dumps(values)

'''
Return all information on one specific resource
'''
@app.route('/get-resource/<string:id>')
def getResource(id):
    doc_ref = db.collection(u'Resources').document(u'{}'.format(id))
    doc = doc_ref.get().to_dict()
    print(doc)
    return json.dumps(doc)

'''
Return all data for particular user from document id
'''
@app.route('/get-user-data/<string:uid>')
def getUserData(uid):
    user_ = db.collection('Users').document(u'{}'.format(uid))
    user = user_.get().to_dict()
    updateCurrentData(user_, user)
    userData = user_.collection(u'data').stream()
    journals = []
    for doc in userData:
        data = doc.to_dict()
        print(data)
        journals.append(data)
    journals.append(user["today"])
    return json.dumps(journals)

'''
Add a journal entry to the database
'''
@app.route('/edit-current-data/<string:uid>', methods=['POST'])
def editCurrentData(uid):
    data = request.get_json()
    print(data)
    user_ = db.collection('Users').document(u'{}'.format(uid))
    user = user_.get().to_dict()
    updateCurrentData(user_, user)
    setUserToday(user_, getCurrentDate(), data.get("journal-entry"), data.get("mood"))
    return data

@app.route('/add-user/<string:uid>')
def addUser(uid):
    data = request.get_json()
    user_ref = db.collection('Users').document(u'{}'.format(uid))
    user = user_ref.get()
    if user.exists:
        return {
            u'success': False,
            u'message': u'Username already exists!'
        }
    else:
        user_data = {
            u'uid': u'{}'.format(uid),
            u'password': u'{}'.format(data.get("password"))
        }
        user_ref.set(user_data)
        setUserToday(user_ref, getCurrentDate(), "", "")

# '''
# Return all journals in database for particular user
# '''
# @app.route('/get-journals/<string:uid>')
# def getJournals(uid):
#     docs = db.collection('Users').document(u'{}'.format(uid)).collection(u'journals').stream()
#     journals = []
#     for doc in docs:
#         data = doc.to_dict()
#         print(data)
#         journals.append(data)
#     return json.dumps(journals)

# '''
# Return all moods in database for particular user
# '''
# @app.route('/get-moods/<string:uid>')
# def getMoods(uid):
#     docs = db.collection('Users').document(u'{}'.format(uid)).collection(u'moods').stream()
#     moods = []
#     for doc in docs:
#         data = doc.to_dict()
#         print(data)
#         moods.append(data)
#     return json.dumps(moods)

# '''
# Add mood entry to database
# '''
# @app.route('/edit-current-mood/<string:uid>', methods=['POST'])
# def editCurrentMood(uid):
#     data = request.get_json()
#     print(data)
#     db.collection(u'Users').document(u'{}'.format(uid)).collection(u'moods').add(data)
#     return data

if __name__ == '__main__':
    app.run()