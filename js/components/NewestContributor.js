var React = require('react');
var ReactPropTypes = React.PropTypes;

var mui = require('material-ui');
var Paper = mui.Paper;


var NewestContributor = React.createClass({
  propTypes: {
    thisContrib: ReactPropTypes.object.isRequired
  },
  render: function() {  
    var contrib = this.props.thisContrib;

    return (
      <div className="newestCont" key={contrib}>
      <Paper className="white-background"  zDepth={1}>
      <div className="mui-font-style-display-4">{contrib.name}</div>
      <div className="mui-font-style-headline">Newest Contributor</div>
      <div className="mui-font-style-caption">${contrib.pledge}</div>
      </Paper>
      </div> 
    )
  }
});


module.exports = NewestContributor;