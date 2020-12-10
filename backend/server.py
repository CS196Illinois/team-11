from flask import Flask, request
import firebase_admin
from firebase_admin import credentials, firestore, auth
from flask_cors import CORS
import json
from datetime import date

'''
Backend API to connect client with Firebase database storing our alumni
'''

cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

app = Flask(__name__)
CORS(app)


def getCurrentDate():
    today = date.today()
    return today.strftime("%m-%d-%Y")


def updateCurrentData(userRef, user):
    print(user)
    previous_date = user["today"]["date"]
    current_date = getCurrentDate()
    if previous_date != current_date:
        yesterday = {
            "date": previous_date,
            "journal-entry": user["today"]["journal-entry"],
            "mood": user["today"]["mood"]
        }
        userRef.collection(u'data').add(yesterday)
        today = {
            u'date': u'{}'.format(current_date),
            u'journal-entry': u'',
            u'mood': u''
        }
        userRef.set({u'today': today})


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
    today = {
        u'date': u'{}'.format(getCurrentDate()),
        u'journal-entry': u'{}'.format(data.get("journal-entry")),
        u'mood': u'{}'.format(data.get("mood"))
    }
    user_.set({u'today': today})
    return data


@app.route('/add-user', methods=['POST'])
def addUser():
    data = request.get_json()
    print(data)
    userData = {
        u'password': u'{}'.format(data.get("password")),
        u'today': {
            u'date': u'{}'.format(getCurrentDate()),
            u'journal-entry': "",
            u'mood': ""
        }
    }
    db.collection(u'Users').add(userData)
    return data


if __name__ == '__main__':
    app.run()
