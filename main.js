console.log('you are good to go')
function myFunction() {
    document.getElementById("demo").innerHTML = "This is johnson";
  }
var db = firebase.firestore();
var docRef = db.collection("2603.TW").doc("Close");
docRef.get().then((doc) => {
    if (doc.exists) {
        console.log(doc.data())
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
