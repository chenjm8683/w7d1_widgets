var React = require('react');

var Clock = React.createClass({
  getInitialState: function() {
    return {
      date: new Date()
    }
  },
  componentDidMount: function () {
    this.intervalID = setInterval(this.tick, 1000)
  },
  componentWillUnmount: function () {
    clearInterval(this.intervalID);
  },
  tick: function () {

    this.state.date.setTime(this.state.date.getTime() + 1000);
    this.setState({ date: this.state.date });
  },
  render: function() {
    return (
      <div>{this.state.date.toString()}</div>

  )}
});

module.exports = Clock;
