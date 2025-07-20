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


    const nuovo = await getDashboardData(`london`)

    const result = await Promise.all(nuovo)


    console.log(result)

})();
