var React = require('react');
var ReactPropTypes = React.PropTypes;

var mui = require('material-ui');
var Paper = mui.Paper;


var TotalContrib = React.createClass({
  propTypes: {
    totalContrib: ReactPropTypes.number.isRequired
  },
  render: function() {  
    var contrib = this.props.totalContrib.toFixed(2);
    return (
      <div className="featured" key={contrib}>
      <Paper className="white-background" zDepth={1}>
      <div className="mui-font-style-display-4">${contrib}</div>
      <div className="mui-font-style-headline">Total Contributed</div>
      </Paper>
      </div> 
    )
  }
});


module.exports = TotalContrib;