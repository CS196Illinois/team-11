from flask import Flask, request
import firebase_admin
from firebase_admin import credentials, firestore, auth
from flask_cors import CORS
import json

'''
Backend API to connect client with Firebase database storing our alumni
'''

# initialize firebase sdk
cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

app = Flask(__name__)
CORS(app)

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
@app.route('/get-userData/<string:uid>')
def getUserData(uid):
    docRef = db.collection(u'Users').document(u'{}'.format(uid))
    doc = docRef.get().to_dict()
    data = {
        'name' : doc['name'],
        'email' : doc['email'],
        'journals' : getJournals(uid),
        'moods' : getMoods(uid),
    }
    return json.dumps(data)

'''
Return all journals in database for particular user
'''
@app.route('/get-journals/<string:uid>')
def getJournals(uid):
    docs = db.collection('Users').document(u'{}'.format(uid)).collection(u'journals').stream()
    journals = []
    for doc in docs:
        data = doc.to_dict()
        print(data)
        journals.append(data)
    return json.dumps(journals)

'''
Add a journal entry to the database
'''
@app.route('/add-journal/<string:uid>', methods=['POST'])
def addJournal(uid):
    data = request.get_json()
    print(data)
    db.collection(u'Users').document(u'{}'.format(uid)).collection(u'journals').add(data)
    return data

'''
Return all moods in database for particular user
'''
@app.route('/get-moods/<string:uid>')
def getMoods(uid):
    docs = db.collection('Users').document(u'{}'.format(uid)).collection(u'moods').stream()
    moods = []
    for doc in docs:
        data = doc.to_dict()
        print(data)
        moods.append(data)
    return json.dumps(moods)

'''
Add mood entry to database
'''
@app.route('/add-mood/<string:uid>', methods=['POST'])
def addMood(uid):
    data = request.get_json()
    print(data)
    db.collection(u'Users').document(u'{}'.format(uid)).collection(u'moods').add(data)
    return data

if __name__ == '__main__':
    app.run()