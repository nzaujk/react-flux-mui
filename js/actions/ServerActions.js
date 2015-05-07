var AppActions = require('./AppActions');

var firebaseRef = new Firebase("https://welcometotheyep.firebaseio.com/users");

var ServerCall = {
call: function() {
  firebaseRef.orderByChild("name").on("child_added", function(dataSnapshot, prev) {
    var res = dataSnapshot.val()
    var key = dataSnapshot.key()
    var info = {name: dataSnapshot.val().name, time: dataSnapshot.val().time, key: dataSnapshot.key(), prevKey: prev}
    AppActions.updateUsers(info);
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