var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Firebase = require('firebase')
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var tweet = [];
var CHANGE_EVENT = 'change';  

var firebaseRef = new Firebase("https://welcometotheyep.firebaseio.com/");
firebaseRef.child("tweets").on("value", function(snapshot) {
  tweet = snapshot.val()});  // Alerts "San Francisco"


 
console.log(tweet);

function toggleFire() {
  firebaseRef.child("tweets").on("value", function(snapshot) {
  tweet = snapshot.val()});
  
  for(var i in tweet){
  console.log(tweet[i]); 
  }
  return tweet;
}

function toggleNav() {
  var docked = ((NavState === true) ? false : true);
  NavState = docked;
}

var AppStore = assign({}, EventEmitter.prototype, {
  

  getAppState: function() {
    return tweet;
  },
  
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case AppConstants.NAV_DOCK:
      toggleFire();
      AppStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = AppStore;