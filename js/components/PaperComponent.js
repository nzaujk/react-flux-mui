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
      <li key={tweet.id}>
      <Paper zDepth={1}>
      <p>{tweet.text}</p>
      </Paper>
      </li>
    )
  }
});


module.exports = PaperComponent;