var React = require('react');
var mui = require('material-ui');
var AppStore = require('./stores/AppStore.js');
var AppActions = require('./actions/AppActions');
  
var NavComponent = require('./components/NavComponent');
var LeftNavComponent = require('./components/LeftNavComponent');
 
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

      </div> 
     );
  },
  _onChange: function() {
    this.setState(getAppState());
  },
   _onDestroyClick: function() {
    this.refs.nav.toggle();
  }
});


var Main = React.createClass({
  render: function() {
    return (
      <div>
        <NavComponent />
       <LeftNavComponent />
      </div> 
    ); 
  }    
});     

React.render(
  <Main />,
  document.getElementById('content')
);