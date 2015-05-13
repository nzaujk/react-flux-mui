var React = require('react');
var mui = require('material-ui');
var Dialog = mui.Dialog; 
var FlatButton = mui.FlatButton;


var DialogComponent = React.createClass({

  render: function() {  
    var customActions = [
  <FlatButton
    label="Cancel"
    secondary={true}
    onTouchTap={this._handleCustomDialogCancel} />,
  <FlatButton
    label="Submit"
    primary={true}
    onTouchTap={this._handleCustomDialogSubmit} />
];
    
    return (
      <Dialog>
  title="Dialog With Custom Actions"
  actions={customActions}
  dismissOnClickAway=true>
  The actions in this window were passed in as an array of react objects.
</Dialog>
    );
  }
});


module.exports = DialogComponent;
