var React = require('react');
var ReactPropTypes = React.PropTypes;

var mui = require('material-ui');
var Paper = mui.Paper;



var PaperComponent = React.createClass({
  propTypes: {
    thisTweet: ReactPropTypes.object.isRequired
  },
  render: function() {  
    var tweet = this.props.thisTweet;
    return (
      <li key={tweet}>
      <Paper zDepth={1}>
      <p>{tweet}</p>
      </Paper>
      </li>
    )
  }
});


module.exports = PaperComponent;