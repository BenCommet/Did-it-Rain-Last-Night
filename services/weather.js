const offset_24_hours = 86400000;

export const getRainfall = async function(){
    let currentTime = new Date();
    currentTime = currentTime.getTime();
    let yesterdayTime = currentTime - offset_24_hours;
    yesterdayTime = new Date(yesterdayTime);
    console.log(yesterdayTime);
    let station = 'KBIV';
    let office = 'grr'
    console.log(yesterdayTime);
    let currentIsoString = yesterdayTime.toISOString();
    console.log('hiiiii', formatedTime);
    // 2021-06-23T01:50:07.531Z
    // 2020-05-14T05:40:08Z
    // 2021-06-23T01:50:07Z
    // 2020-05-14T14:40:08Z
    // let weatherURL = `https://api.weather.gov/alerts?start=${formatedTime}`
    let weatherURL = `https://api.weather.gov/stations/${station}/observations?start=${formatedTime}`
    const response = await fetch(weatherURL)
    const observations = await response.json();
    for(let i = 0; i < observations.length; i++) {
        // let 
    }
    return posts;
}

const getIntervalInMiliseconds = (hours = 0, minutes = 0, seconds = 0) => {
    let totalMileseconds = hours * 60 * 60 * 1000;
    totalMileseconds += minutes * 60 * 1000;
    totalMileseconds += seconds * 1000;

    return totalMileseconds;
}