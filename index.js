import admin from 'firebase-admin'
import serviceAccount from './secret/firebase-adminsdk.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const users = [  
  {
    "id": 1,
    "first_name": "Kristin",
    "last_name": "Smith"
  },
  {
    "id": 2,
    "first_name": "Olivia",
    "last_name": "Parker"
  },
  {
    "id": 3,
    "first_name": "Jimmy",
    "last_name": "Robinson"
  }
]

users.forEach((obj) => {
  db.collection("users").add({
    id: obj.id,
    first_name: obj.first_name,
    last_name: obj.last_name
  }).then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
});

// メモ
// usersの定義は別ファイルに切り出したい
