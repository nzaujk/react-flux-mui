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
    AppDispatcher.dispatch({
      actionType: AppConstants.USER_INFO,
      info: i
    });
  },
  submitPledge: function(n,p) {
    console.log(n);
      console.log(p);
    AppDispatcher.dispatch({
      actionType: AppConstants.SUBMIT_PLEDGE,
      name: n,
      pledge: p
    });
  }
};

module.exports = AppActions;