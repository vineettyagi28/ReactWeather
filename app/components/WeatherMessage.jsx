var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return(
      <p>It's {temp} degree celcious in {location}</p>
    );
  };

module.exports = WeatherMessage;
