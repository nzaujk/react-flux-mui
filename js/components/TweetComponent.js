var React = require('react');
var ReactPropTypes = React.PropTypes;
var PaperComponent = require('./PaperComponent');
var mui = require('material-ui');
var Paper = mui.Paper;



var TweetComponent = React.createClass({
  propTypes: {
    allTweets: ReactPropTypes.object.isRequired
  },
  render: function() {  
    var allTweets = this.props.allTweets;
    var tweets = [];
  
    for(var key in allTweets){
      console.log(allTweets[key]);
      tweets.push(<PaperComponent key={key} thisTweet={allTweets[key]} />);
    }
     
    return (
      <section id="main">
      <ul>{tweets}</ul>
      </section>
    );
  }
});


module.exports = TweetComponent;