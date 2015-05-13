var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;
var RaisedButton = mui.RaisedButton;  
var TextField = mui.TextField;
var ServerCall = require('../actions/ServerActions');
    
var FormComponent = React.createClass({

  render: function() {  
    return (
      <div className="newestCont">
                <div className="row">
                  <div className="col-md-12">
          <TextField hintText="Name" floatingLabelText="Name" onChange={this._handleNameChange} />
                  </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <TextField hintText="Pledge Amount" floatingLabelText="Pledge Amount" onChange={this._handlePledgeChange} />
               </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <RaisedButton label="Submit" onClick={this._handleSubmit}/>
               </div>
              </div>
      </div>
    );  
  },
   _handleNameChange: function() {
    this.props.name = event.target.value;
    console.log(this.props.name);
  },
   _handlePledgeChange: function() {
    this.props.pledge = event.target.value;
    console.log(this.props.pledge);
  },
   _handleSubmit: function() {
    ServerCall.post(this.props.name, Number(this.props.pledge));
    this.props.name = undefined;
    this.props.pledge = undefined;
  }
});

module.exports = FormComponent;