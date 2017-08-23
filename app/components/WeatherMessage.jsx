var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return(
      <h3 className="text-center">It's {temp} degree celcious in {location}.</h3>
    );
  };

module.exports = WeatherMessage;
