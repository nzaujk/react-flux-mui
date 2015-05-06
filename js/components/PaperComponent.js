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
      <ReactCSSTransitionGroup transitionName="example">
      <div className="row view" key={tweet.id}>
      <Paper zDepth={1}>
      <p className="text-indent">{tweet.name}</p>
      </Paper>
      </div>
      </ReactCSSTransitionGroup>
    )
  }
});


module.exports = PaperComponent;