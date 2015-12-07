var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function() {
    return {
      inputString: ""
    };
  },

  handleChange: function(e) {
    this.setState({ inputString: e.target.value });
  },

  handleClick: function(e) {
    this.setState({ inputString: e.target.innerHTML });
  },


  render: function() {
    var names = this.props.names,
        searchingString = this.state.inputString.toLowerCase();
    if (searchingString.length > 0) {
      names = names.filter(function(name) {
        return name.toLowerCase().match(searchingString);
      })
    } else {
      names = [];
    }

    return (
      <div>
        <input
          type="text"
          value={this.state.inputString}
          onChange={this.handleChange}
        />

        <ul>
          {
            names.map(function(name) {
              return (
                <li
                  key={name}
                  onClick={this.handleClick}>
                  {name}
                </li>
              )
            }.bind(this))
          }
        </ul>
      </div>
    )
  }

})


module.exports = Autocomplete;
