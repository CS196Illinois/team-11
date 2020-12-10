from flask import Flask, request
import firebase_admin
from firebase_admin import credentials, firestore, auth
from flask_cors import CORS
import json
import string
import random
from datetime import date

'''
Backend API to connect client with Firebase database storing our alumni
'''

cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

app = Flask(__name__)
CORS(app)

def GenerateID():
    return ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase + string.digits, k=50))

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

def authenticate(user_dict, sessionid):
    return user_dict["sessionid"] == sessionid


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

@app.route('/add-user/<string:uid>', methods=['POST'])
def addUser(uid):
    print("bruh moment")
    data = request.form
    user_ref = db.collection('Users').document(u'{}'.format(uid))
    user = user_ref.get()
    if user.exists:
        print("This username already exists you dumbass, waht are you doing with ur life")
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
        return {
            u'success': True,
            u'message': u'User created!'
        }

@app.route('/login/<string:uid>', methods=['POST'])
def login(uid):
    data = request.form
    print(data)
    user_ref = db.collection('Users').document(u'{}'.format(uid))
    user = user_ref.get()
    if user.exists:
        user_dict = user.to_dict()
        if (data.get("password") == user_dict["password"]):
            sessionid = GenerateID();
            print(sessionid)
            user_ref.set({u'sessionid': u'{}'.format(sessionid)}, merge=True)
            return {
                u'success': True,
                u'sessionid': u'{}'.format(sessionid),
                u'message': u'Big dog status monday'
            }
        else:
            print("nah");
    else:
        print("nope");
    return {
        u'success': False,
        u'message': u'Invalid username or password.'
    }

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

# @app.route('/add-user', methods = ['POST'])
# def addUser():
#     data = request.get_json()
#     print(data)
#     userData = {
#         u'password': u'{}'.format(data.get("password")),
#         u'today': {
#             u'date': u'{}'.format(getCurrentDate()),
#             u'journal-entry': "",
#             u'mood': ""
#         }
#     }
#     db.collection(u'Users').add(userData)
#     return data


if __name__ == '__main__':
    app.run()
