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
  }

};

module.exports = AppActions;