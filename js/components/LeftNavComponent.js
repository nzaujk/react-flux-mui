var React = require('react');
var mui = require('material-ui');
var LeftNav = mui.LeftNav;
var RaisedButton = mui.RaisedButton;

var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'css-framework', text: 'CSS Framework' },
  { route: 'components', text: 'Components' },
];


var LeftNavComponent = React.createClass({
  render: function() {  
    return (
      <div className="left-nav-example">
      <RaisedButton label="Toggle Docked Left Nav"/>
    <RaisedButton label="Toggle Docked Left Nav" onClick={this._toggle}/>
    <LeftNav ref="nav" docked={true} menuItems={menuItems} />
    </div>
    );
  },
   _toggle: function() {
    this.refs.nav.toggle();
  }
});

module.exports = LeftNavComponent;