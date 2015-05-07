var React = require('react');
var Firebase = require('firebase')

var mui = require('material-ui');
var AppStore = require('./stores/AppStore.js');
var AppActions = require('./actions/AppActions');
var RaisedButton = mui.RaisedButton;   
var NavComponent = require('./components/NavComponent');
var LeftNavComponent = require('./components/LeftNavComponent');
var TextComponent = require('./components/TextComponent');
var TweetComponent = require('./components/TweetComponent');
var FormComponent = require('./components/FormComponent');
var ServerCall = require('./actions/ServerActions');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin(); 
 
function getAppState() {
  return {   
    leaderBoard: AppStore.getLeaderBoard(),
    newestContrib: AppStore.getNewestContrib(),
    totalContrib: AppStore.getTotalContrib()
  };
} 

var Main = React.createClass({
  getInitialState: function() {
    return getAppState();
  }, 
  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
    ServerCall.call();
  },
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },      
  render: function() {
    return ( 
      <div>
      <TweetComponent allTweets={this.state.leaderBoard} thisContrib={this.state.newestContrib} totalContrib={this.state.totalContrib} />
      {/* <RaisedButton label="Toggle Docked Left Nav" onClick={this._onDestroyClick}/> */}
      <LeftNavComponent />
      </div>  
     );  
  }, 
  _onChange: function() {
    this.setState(getAppState());
  },
   _onDestroyClick: function() {
    AppActions.toggleNav();
  }
});
    

React.render(
  <Main />,
  document.getElementById('content')
);