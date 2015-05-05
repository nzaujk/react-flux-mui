var React = require('react');
var mui = require('material-ui');
var Tabs = mui.Tabs; 
var Tab = mui.Tab;

var NavComponent = React.createClass({

  render: function() {  
    return (
      <Tabs>
      <Tab label="One" > 
    <div className="lol">
      </div>
      </Tab>
      <Tab label="Two">
      <div className="lol">
      </div>
      </Tab>
    </Tabs> 
    );
  }
});


module.exports = NavComponent;