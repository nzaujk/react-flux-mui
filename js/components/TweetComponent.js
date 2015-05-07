var React = require('react');
var ReactPropTypes = React.PropTypes;
var PaperComponent = require('./PaperComponent');
var NewestContributor = require('./NewestContributor');
var FormComponent = require('./FormComponent');
var TotalContrib = require('./TotalContrib');
var mui = require('material-ui');
var Paper = mui.Paper;



var TweetComponent = React.createClass({
  propTypes: {
    allTweets: ReactPropTypes.array.isRequired,
    thisContrib: ReactPropTypes.object.isRequired,
    totalContrib: ReactPropTypes.number.isRequired
  },
  render: function() {  
    var allTweets = this.props.allTweets;
    var thisContrib = this.props.thisContrib;
    var totalContrib = this.props.totalContrib;
    
    var tweets = [];
    var contr = [] 
    var totalCont = []
    

    if(totalCont != null){
      totalCont.push(<TotalContrib key={totalContrib} totalContrib={totalContrib} />);
    }
                 
    if(thisContrib != null){
      contr.push(<NewestContributor key={thisContrib} thisContrib={thisContrib} />);
    }
                 
    for(var i in allTweets){
      tweets.push(<PaperComponent key={i} thisTweet={allTweets[i]} />);
    }
     
    return (
      <div className="row">

      <div className="col-md-8">
                  
        <div className="row">
        <div className="col-md-12">
          {totalCont}
        </div>
                  
       </div>
                  
       <div className="row">
        <div className="col-md-6">
          {contr}
        </div>
        <div className="col-md-6">
          {contr}
        </div>
       </div>
                  
        <div className="row">
        <div className="col-md-6">
          <FormComponent />
        </div>
                  
       </div>
                  
      </div>
                  
                  
      <div className="col-md-4">
                  {tweets}
 
       </div>
    </div>
    );
  } 
});


module.exports = TweetComponent;