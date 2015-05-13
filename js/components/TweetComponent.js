var React = require('react');
var ReactPropTypes = React.PropTypes;

var PaperComponent = require('./PaperComponent');
var NewestContributor = require('./NewestContributor');
var HighestContributor = require('./HighestContributor');
var FormComponent = require('./FormComponent');
var DialogComponent = require('./DialogComponent');
var TotalContrib = require('./TotalContrib');
var LoadingIcon = require('./LoadingIcon');

var mui = require('material-ui');
var Paper = mui.Paper;

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var isLoading = true;
function toggleLoader(){
  isLoading = false;
}

var CompComponent = React.createClass({
  propTypes: {
    allTweets: ReactPropTypes.array.isRequired,
    thisContrib: ReactPropTypes.object.isRequired,
    highContrib: ReactPropTypes.object.isRequired,
    totalContrib: ReactPropTypes.number.isRequired
  },
  render: function() {  
    var allTweets = this.props.allTweets;
    var thisContrib = this.props.thisContrib;
    var highContrib = this.props.highContrib;
    var totalContrib = this.props.totalContrib;
    
    var tweets = [];
    var contr = [] 
    var highContr = [] 
    var totalCont = []
    var icon = []
    var coolDown = 200;
    var form = [];
    
    if(isLoading){
      icon.push( <LoadingIcon />);
      form = [];
    } else {
        icon = []
        form = <FormComponent />;
                }
    
    if(totalCont){
      totalCont = <TotalContrib key={totalContrib} totalContrib={totalContrib} />;
    }
           
    if(thisContrib){
      contr = <React.addons.TransitionGroup>
                 <NewestContributor key={thisContrib.key} thisContrib={thisContrib} />
                 </React.addons.TransitionGroup>;
    }
    
    if(highContrib){
      highContr = <React.addons.TransitionGroup>
                 <HighestContributor key={highContrib.key} highContrib={highContrib} />
                 </React.addons.TransitionGroup>;
    }
                 
    for(var i in allTweets){
      tweets.push(<React.addons.TransitionGroup>
                  <PaperComponent isLoading={toggleLoader} coolDown={coolDown} key={allTweets[i].key} thisTweet={allTweets[i]} />
                  </React.addons.TransitionGroup> );
      coolDown = coolDown + 100;
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
          {highContr}
        </div>
       </div> 
                  
                  
       <div className="row">
                  <div className="col-md-12">
          <div className="mui-font-style-display-1">make a pledge</div>
                  </div>
        </div>
      <div className="row">
        <div className="col-md-12">
          {form}
          </div>        
      </div>         
      </div>                   
      <div className="col-md-4">
        <div className="row leaderBoard">
                <div className="mui-font-style-display-1">LeaderBoard</div>
        </div>
        <div className="row leaderBoard">
                  {icon}
        </div>
        {tweets}
                  
       </div>
    </div>
    );
  } 
});


module.exports = CompComponent;