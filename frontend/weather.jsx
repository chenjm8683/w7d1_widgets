var React = require('react');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      weather: "",
      temp: ""
    };
  },

  componentDidMount: function() {
    var requestWeather = function(pos) {
      var lat = pos.coords.latitude;
      var lon = pos.coords.longitude;
      var url = "http://api.openweathermap.org/data/2.5/weather?lat="
              + lat + "&lon=" + lon
              + "&appid=645c5d39c7603f17e23fcaffcea1a3c1";
      var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            // Success!
            var resp = JSON.parse(request.responseText);
            var weatherStr = "Today's weather is "
                + resp.weather[0].main + " .";
            var tempStr = "Today's temperature is "
                + ((resp.main.temp - 273.15)* 1.8000 + 32.00) + "F."
            this.setState({ weather: weatherStr });
            this.setState({ temp: tempStr });
          } else {
            // We reached our target server, but it returned an error
            alert("error");
          }
        }.bind(this);

        request.onerror = function() {
          // There was a connection error of some sort
        };

        request.send();

    };

    navigator.geolocation.getCurrentPosition(requestWeather.bind(this));
  },

  render: function() {
    return (
      <div>
        <p>{this.state.weather}</p>
        <p>{this.state.temp}</p>
      </div>
    )
  }

});

module.exports = Weather;
