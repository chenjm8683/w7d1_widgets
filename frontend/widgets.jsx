var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('./autocomplete.jsx')

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <Autocomplete
          names={["Colin", "Jacob", "Jeff", "Max", "Ned", "Gizmo"]}
          />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('widgets'));
});
