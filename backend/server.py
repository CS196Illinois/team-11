from flask import Flask, request
import firebase_admin
from firebase_admin import credentials, firestore
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

@app.route('/home')
def home():
    docs = db.collection(u'Resources').stream()
    print(docs)
    values = []
    for doc in docs:
        data = doc.to_dict()
        values.append(data)

    return json.dumps(values)
 

if __name__ == '__main__':
    app.run()
