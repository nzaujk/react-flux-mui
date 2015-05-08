var React = require('react');
var ReactPropTypes = React.PropTypes;

var mui = require('material-ui');
var Paper = mui.Paper;


var NewestContributor = React.createClass({
  propTypes: {
    thisContrib: ReactPropTypes.object.isRequired
  },
  componentWillAppear: function(callback) {
    this._animateIn(callback);
  },
  
  componentWillEnter: function(callback) {
    this._animateIn(callback);
  },
  
  componentWillLeave: function(callback) {
    this._animateOut(callback);
  },
  
  _animateIn(callback) {
    var el = React.findDOMNode(this);
    TweenLite.set(el, {opacity: 0});
    setTimeout(function() {
      TweenLite.to(el, 1, {opacity: 1}).play().eventCallback("onComplete", callback);
    }, 200); 
  },
  
  _animateOut(callback) {
    var el = React.findDOMNode(this);
    setTimeout(function() {
      TweenLite.to(el, 1, {opacity: 0}).play().eventCallback("onComplete", callback);
    }, 200);
  },
  render: function() {  
    var contrib = this.props.thisContrib;
    var pledge = Number(this.props.thisContrib.pledge).toFixed(2); 
    return (
      <div className="newestCont" key={contrib}>
      <Paper className="white-background"  zDepth={1}>
      <div className="mui-font-style-display-4">{contrib.name}</div>
      <div className="mui-font-style-headline">Newest Contributor</div>
      <div className="mui-font-style-caption">${pledge}</div>
      </Paper>
      </div> 
    )
  }
});


module.exports = NewestContributor;