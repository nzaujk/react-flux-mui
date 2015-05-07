var React = require('react');
var ReactPropTypes = React.PropTypes;

var mui = require('material-ui');
var Paper = mui.Paper;

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


var PaperComponent = React.createClass({
  propTypes: {
    thisTweet: ReactPropTypes.object.isRequired
  },
  render: function() {  
    var tweet = this.props.thisTweet;
    return (
      <div className="row leaderBoard" key={tweet.key}>
      <Paper className="white-background" zDepth={1}>
      <h2 className="text-indent">${tweet.pledge}</h2>
      <p className="text-indent">{tweet.name}</p>
      </Paper>
      </div>
    )
  }
});


module.exports = PaperComponent;