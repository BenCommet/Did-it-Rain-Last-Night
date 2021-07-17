import {metersToInches} from './units'
const offset_1_hour = 3600000;
const offset_24_hours = 86400000;

const getOffsetTime = function(offset){
    let currentTime = new Date();
    currentTime = currentTime.getTime();
    let yesterdayTime = currentTime - offset;
    yesterdayTime = new Date(yesterdayTime);
    let currentIsoString = yesterdayTime.toISOString();
    let lastColonIndex = currentIsoString.lastIndexOf('.');
    let formattedTime = currentIsoString.substring(0, lastColonIndex) + 'Z';
    return formattedTime;
}

export const getRainfall = async function(hours){
    hours = parseInt(hours);
    let station = 'KBIV';
    let office = 'grr'

    let formattedTime = getOffsetTime(offset_1_hour * hours);
    let weatherURL = `https://api.weather.gov/stations/${station}/observations?start=${formattedTime}`
    const response = await fetch(weatherURL);
    const responseJson = await response.json();
    let observations = responseJson.features;
    // console.log('noodle: ', observations[0]);
    let total = 0;
    for(let i = 0; i < observations.length; i++) {
        let observation = observations[i];
        let pastHourValue = observation.properties.precipitationLastHour.value;
        if(pastHourValue !== null){
            total += pastHourValue
        }
    }
    // return posts;
    return metersToInches(total);
}

