var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('./autocomplete.jsx');
var WeatherClock = require('./weather_clock.jsx');

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <Autocomplete
          names={["Colin", "Jacob", "Jeff", "Max", "Ned", "Gizmo"]}
          />
        <WeatherClock />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('widgets'));
});
