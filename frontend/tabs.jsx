var React = require('react');

var Tabs = React.createClass({
  getInitialState: function () {
    return ({tabIndex: 0});
  },
  handleClick: function (e) {
    this.setState({ tabIndex: parseInt(e.target.dataset.tabId) });
  },

  render: function () {
    return (
      <div>
        <ul>
          {this.props.ar.map(function(ar, idx) {
            var isSelected = (idx === this.state.tabIndex)
            return (
                <li
                  key={ar.title}
                  data-tab-id={idx}
                  onClick={this.handleClick}
                  style={isSelected ? {fontWeight: 'bold'} : {}}>
                  {ar.title}
                </li>);
            }.bind(this))
          }
        </ul>

        <p>
          {this.props.ar[this.state.tabIndex].content}
        </p>

      </div>

    );
  }
});

module.exports = Tabs;
