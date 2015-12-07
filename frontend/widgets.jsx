var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('./autocomplete.jsx');
var WeatherClock = require('./weather_clock.jsx');
var Tabs = require('./tabs.jsx');

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <Autocomplete
          names={["Colin", "Jacob", "Jeff", "Max", "Ned", "Gizmo"]}
          />
        <WeatherClock />
        <Tabs
          ar={
            [
            {title: "title 1", content: "content1"},
            {title: "title 2", content: "content2"},
            {title: "title 3", content: "content3"},
            {title: "title 4", content: "content4"},
            {title: "title 5", content: "content5"}
            ]
          }
        />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('widgets'));
});
