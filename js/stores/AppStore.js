var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Firebase = require('firebase')
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var firebaseRef = new Firebase("https://welcometotheyep.firebaseio.com/");
var tweet = {};
var CHANGE_EVENT = 'change';  


function toggleFire(info) {
  tweet = info;
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
    case AppConstants.USER_INFO:
      toggleFire(info);
      AppStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = AppStore;