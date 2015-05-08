var AppDispatcher = require('../dispatcher/AppDispatcher');
var Immutable = require('immutable');
var _ = require('underscore');
var EventEmitter = require('events').EventEmitter;
var Firebase = require('firebase')
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var firebaseRef = new Firebase("https://welcometotheyep.firebaseio.com/");
var leaderBoard = [];
var newestContrib = {};
var totalContrib = 0;
var State = {}
var CHANGE_EVENT = 'change';  

var User = Immutable.Record({
  time: undefined,
  name: undefined
});

var users = Immutable.List();
                                   
function toggleFire(info) {
  // set total contributed
  totalContrib = totalContrib + info.pledge;
  console.log(info.pledge);

  // set newest contributor
  newestContrib = info; 
  
  // add and sort the leaderboard
  var cont = leaderBoard;
  cont.push(info); 
  var sorted = _.sortBy(cont, "pledge");
  var reversed = sorted.reverse();
  leaderBoard = reversed.slice(0,10);
}

function toggleNav() {
  var docked = ((NavState === true) ? false : true);
  NavState = docked;
}

var AppStore = assign({}, EventEmitter.prototype, {
  

  getLeaderBoard: function() {
    return leaderBoard;
  },
  getNewestContrib: function() {
    return newestContrib;
  },
  getTotalContrib: function() {
    return totalContrib;
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
      var info = action.info;
      toggleFire(info);
      AppStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = AppStore;