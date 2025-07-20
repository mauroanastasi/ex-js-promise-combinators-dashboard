const API_URL = (`http://localhost:3333`);


const getDashboardData = async query => {
    let data = [];

    const ric = await fetch(`${API_URL}/destinations?search=${query}`)
    const risultato1 = await ric.json()
    data.push(risultato1[0].name, risultato1[0].country)


    const ricc = await fetch(`${API_URL}/weathers?search=${query}`)
    const risultato2 = await ricc.json()
    data.push(risultato2[0].temperature, risultato2[0].weather_description)

    const riccc = await fetch(`${API_URL}/airports?search=${query}`)
    const risultato3 = await riccc.json()
    data.push(risultato3[0].name)

    return data
}

(async () => {

    let data = [];

    const nuovo = await getDashboardData(`london`)

    const result = await Promise.all(nuovo)

    data = { city: result[0], country: result[1], temperature: result[2], weather: result[3], airport: result[4] }

    console.log(
        `${data.city} is in ${data.country}.\n` +
        `Today there are ${data.temperature} degrees and the weather is ${data.weather}.\n` +
        `The main airport is ${data.airport}.\n`
    );

})();
