var React = require('react');
var mui = require('material-ui');
var TextField = mui.TextField;


    
    
var TextComponent = React.createClass({

  render: function() {  
    return (
      <TextField
  hintText="Hint Text" />
    );
  }
});

module.exports = TextComponent;