var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
   e.preventDefault();

   var cityNameRef = this.refs.cityName;
   var location = cityNameRef.value;

   if(location.length >  0){
     cityNameRef.value = '';
     this.props.onSearch(location);
   }


 },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>  <input type="search" ref="cityName" placeholder="Search weather by city"></input></div>
        <button className="hollow button expanded">Get Weather</button>
      </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
