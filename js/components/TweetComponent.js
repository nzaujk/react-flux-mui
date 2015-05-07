var React = require('react');
var ReactPropTypes = React.PropTypes;
var PaperComponent = require('./PaperComponent');
var mui = require('material-ui');
var Paper = mui.Paper;



var TweetComponent = React.createClass({
  propTypes: {
    allTweets: ReactPropTypes.array.isRequired
  },
  render: function() {  
    var allTweets = this.props.allTweets;
    var tweets = [];
  
    for(var i in allTweets){
      tweets.push(<PaperComponent key={i} thisTweet={allTweets[i]} />);
    }
     
    return (
      <div className="row">
      <div className="col-md-8"> </div>
      <div className="col-md-4">
                  {tweets}
 
       </div>
      </div>
    );
  } 
});


module.exports = TweetComponent;