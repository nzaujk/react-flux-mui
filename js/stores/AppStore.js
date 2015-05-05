var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var NavState = false;
var CHANGE_EVENT = 'change';  

function toggleNav() {
  var docked = ((NavState === true) ? false : true);
  console.log(docked);
  NavState = docked;
}

var AppStore = assign({}, EventEmitter.prototype, {
    
  getAppState: function() {
    return NavState;
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
      toggleNav();
      AppStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = AppStore;