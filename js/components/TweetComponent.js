var React = require('react');
var ReactPropTypes = React.PropTypes;
var PaperComponent = require('./PaperComponent');
var NewestContributor = require('./NewestContributor');
var mui = require('material-ui');
var Paper = mui.Paper;



var TweetComponent = React.createClass({
  propTypes: {
    allTweets: ReactPropTypes.array.isRequired,
    thisContrib: ReactPropTypes.object.isRequired
  },
  render: function() {  
    var allTweets = this.props.allTweets;
    var thisContrib = this.props.thisContrib;
    var tweets = [];
    var contr = []
    if(thisContrib != null){
      contr.push(<NewestContributor key={thisContrib} thisContrib={thisContrib} />);
    }
                 
    for(var i in allTweets){
      tweets.push(<PaperComponent key={i} thisTweet={allTweets[i]} />);
    }
     
    return (
      <div className="row">
      <div className="col-md-8">{contr}</div>
      <div className="col-md-4">
                  {tweets}
 
       </div>
      </div>
    );
  } 
});


module.exports = TweetComponent;