var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {

  /**
   * @param  {string} text
   */
  toggleNav: function() {
    AppDispatcher.dispatch({
      actionType: AppConstants.NAV_DOCK
    });
  },
  updateUsers: function(i) {
    var info = i;
    AppDispatcher.dispatch({
      actionType: AppConstants.USER_INFO,
      info: info
    });
  }
};

module.exports = AppActions;