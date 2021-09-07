
const API_KEY = `081dc7f09ae926847f42b8332957e72d`;

const SearchButton = () => {
    const InputTag = document.getElementById('InputCity')
    const InputValue = InputTag.value;
    InputTag.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${InputValue}&appid=${API_KEY}&units=metric`;
    console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(data => DisplayWather(data))

}
const setinnertext = (id, text) => {
    document.getElementById(id).innerText = text;


}

const DisplayWather = temparature => {

    setinnertext('city', temparature.name);
    setinnertext('tempar', temparature.main.temp);
    setinnertext('condition', temparature.weather[0].main)
    //set icon 
    const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const weathericon = document.getElementById('weatherimage');
    weathericon.setAttribute('src', url);


}
