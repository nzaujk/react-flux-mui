var AppActions = require('./AppActions');

var firebaseRef = new Firebase("https://welcometotheyep.firebaseio.com/users");

var ServerCall = {
call: function() {
  firebaseRef.on("value", function(dataSnapshot) {
     console.log(dataSnapshot.val());
    AppActions.updateUsers(dataSnapshot.val());
});
  }
}


////var firebaseRef = new Firebase("https://welcometotheyep.firebaseio.com/users");
//    firebaseRef.orderByChild("time").on("child_added", function(snapshot) {
//      for (var i in snapshot.val()){
//      console.log(snapshot.val()[i]);
//      }
//      console.log(snapshot.val());

module.exports = ServerCall;