var AppActions = require('./actions/AppActions');

var firebaseRef = new Firebase("https://welcometotheyep.firebaseio.com/");
firebaseRef.on("child_added", function(dataSnapshot) {
    AppActions.updateUsers(dataSnapshot.val());
});
  