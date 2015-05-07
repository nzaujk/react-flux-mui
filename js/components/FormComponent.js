var React = require('react');
var mui = require('material-ui');
var TextField = mui.TextField;
var Paper = mui.Paper;

    
    
var FormComponent = React.createClass({

  render: function() {  
    return (
      <div className="newestCont">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <TextField hintText="Name" floatingLabelText="Name"/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                <TextField hintText="Pledge Amount"  floatingLabelText="Pledge Amount"/>
               </div>
              </div>
        </form>
      </div>
    ); 
  }
});

module.exports = FormComponent;