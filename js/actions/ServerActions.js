var AppActions = require('./AppActions');

var firebaseRef = new Firebase("https://welcometotheyep.firebaseio.com/users");

var ServerCall = {
call: function() {
  firebaseRef.on("child_added", function(dataSnapshot) {
    var info = dataSnapshot.val()
    AppActions.updateUsers(info);
});
  
//  firebaseRef.on("child_added", function(dataSnapshot) {
//    var res = dataSnapshot.val()
//    var key = dataSnapshot.key()
//    var info = {name: dataSnapshot.val().name, pledge: dataSnapshot.val().pledge, key: dataSnapshot.key()}
//    AppActions.updateUsers(info);
//});
  }
}


////var firebaseRef = new Firebase("https://welcometotheyep.firebaseio.com/users");
//    firebaseRef.orderByChild("time").on("child_added", function(snapshot) {
//      for (var i in snapshot.val()){
//      console.log(snapshot.val()[i]);
//      }
//      console.log(snapshot.val());

module.exports = ServerCall;