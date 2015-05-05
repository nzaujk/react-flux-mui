var React = require('react');
var mui = require('material-ui');
var AppStore = require('./stores/AppStore.js');
var AppActions = require('./actions/AppActions');
var RaisedButton = mui.RaisedButton;   
var NavComponent = require('./components/NavComponent');
var LeftNavComponent = require('./components/LeftNavComponent');
var TextComponent = require('./components/TextComponent');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin(); 
    
   
function getAppState() {
  return {  
    docked: AppStore.getAppState()
  };
}   
   
var DockComponent = React.createClass({
  getInitialState: function() {
    return getAppState();
  },
  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div>
     <p> {this.state.docked} </p>
      <RaisedButton label="Toggle Docked Left Nav" onClick={this._onDestroyClick}/>
      <p>hello </p>
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


var Main = React.createClass({
  render: function() {
    return (
      <div>
        <NavComponent />
       <LeftNavComponent />
        <TextComponent />
      <DockComponent />
      </div> 
    ); 
  }    
});     

React.render(
  <Main />,
  document.getElementById('content')
);