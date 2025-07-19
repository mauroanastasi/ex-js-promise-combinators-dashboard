const API_URL = (`http://localhost:3333`);



const getDashboardData = async query => {
    let data = [];

    const ric = await fetch(`${API_URL}/destinations?search=${query}`)
    const risultato1 = ric.json()
    data.push(risultato1)

    const ricc = await fetch(`${API_URL}/weathers?search=${query}`)
    const risultato2 = ricc.json()
    data.push(risultato2)

    const riccc = await fetch(`${API_URL}/airports?search=${query}`)
    const risultato3 = riccc.json()
    data.push(risultato3)
    console.log(data)
}

(async () => {

})();

getDashboardData(`london`)