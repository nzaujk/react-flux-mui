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
      <div className="row featured" key={contrib}>
      <Paper zDepth={1}>
      <p className="text-indent">{contrib.name}</p>
      </Paper>
      </div>
    )
  }
});


module.exports = NewestContributor;