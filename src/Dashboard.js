import React from 'react';
import {TitleSection} from './functionLibrary';
import './App.css';

var testing = false;

class Dashboard extends React.Component{

    render(){

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(SetWeather);
        }else {
            alert("Geolocation is not supported by this browser.");
        }

        return(
            <div>
                <div>
                    {TitleSection("Good Day Swapnil")}
                </div>
                <div style={{textAlign: 'center'}}>
                    <div style={{width: '1500px', textAlign: 'center', display: 'inline-block'}}>
                        {dashboardObjectPreview('Weather')}
                        {dashboardObjectPreview('News')}
                        {dashboardObjectPreview('Sport')}
                        {dashboardObjectPreview('Photos')}
                        {dashboardObjectPreview('Tasks')}
                        {dashboardObjectPreview('Clothes')}
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * Callback function from getCurrentPosition which calls the openweathermap api and returns
 * the details in json format.
 * @param {json} coords returned from the geolocation.getCurrentPosition#
 */
const SetWeather = async (position) => {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=d0a10211ea3d36b0a6423a104782130e');
    const weatherDetails = await response.json(); //extract JSON from the http response
    var content = returnWeatherHTML(weatherDetails);
    document.getElementById("Weather").innerHTML = content;

}

/**
 * Function which from the weather details, returns the HTML to put in the weather widget
 * @param {json} weatherDetails 
 */
function returnWeatherHTML(weatherDetails){
    var imageSrc = "http://openweathermap.org/img/wn/" + weatherDetails['weather'][0]['icon'] + "@2x.png";
    var temperature = weatherDetails['main']['temp'];
    var placeName = weatherDetails['name'];
    return '<div><div><table style="width: 100%;"><tbody><tr><td style="width: 50%;"><img style="height: 120px;" src="' + imageSrc + '"></img></td><td style="width: 50%; font-size: 22px;">' + temperature + ' Degrees</td></tr></tbody></table></div><div style="font-size: 22px;">' + placeName + '</div></div>';

    
}

/**
 * Function to generate the outline of a dashboard widget
 * @param {String} title 
 */
function dashboardObjectPreview(title){
    return(
        <div className="dashboard-object" style={{height: '248px', width: '337px', display: 'inline-block', margin: '50px', verticalAlign: 'top'}}>
            <div style={{padding: '15px 0px', textAlign: 'center', width: '100%', fontSize: '23px', fontWeight: 'bold'}}>{title}</div>
            <div id={title}>
                
            </div>
        </div>
    );
}

export default Dashboard;