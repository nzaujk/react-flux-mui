var React = require('react');
var ReactPropTypes = React.PropTypes;
var LoadingIcon = require('./LoadingIcon');
var AppActions = require('../actions/AppActions');

var mui = require('material-ui');
var Paper = mui.Paper;


var PaperComponent = React.createClass({
  propTypes: {
    thisTweet: ReactPropTypes.object.isRequired,
    coolDown: ReactPropTypes.number.isRequired
  },
  componentWillAppear: function(callback) {
    console.log("componentWillAppear");
    this._animateIn(callback);
    this.props.isLoading();
  },
  
  componentWillEnter: function(callback) {
    console.log("componentWillEnter");
    this._animateIn(callback);
  },
  
  componentWillLeave: function(callback) {
    console.log("componentWillLeave");
    this._animateOut(callback);
  },
  
  _animateIn(callback) {
    var el = React.findDOMNode(this);
    TweenLite.set(el, {opacity: 0});
    setTimeout(function() {
      console.log("timed in");
      TweenLite.to(el, 1, {opacity: 1}).play().eventCallback("onComplete", callback);
    }, this.props.coolDown); 
  },
  
  _animateOut(callback) {
    var el = React.findDOMNode(this);
    setTimeout(function() {
      console.log("timed out");
      TweenLite.to(el, 1, {opacity: 0}).play().eventCallback("onComplete", callback);
    }, 200);
  },
  render: function() {  
    var tweet = this.props.thisTweet;
    var pledge = this.props.thisTweet.pledge.toFixed(2);
    return (
      <div className="row leaderBoard" key={tweet.key}>
      <Paper zDepth={1}>
      <h2 className="text-indent">${pledge}</h2>
      <p className="text-indent">{tweet.name}</p>
      </Paper>
      </div>
    )
  }
});


module.exports = PaperComponent;