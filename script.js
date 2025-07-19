const API_URL_DEST = (`http://localhost:3333`);
// const API_URL_WEATH = `http://localhost:3333/weathers?search=${query}`;



// const API_URL_AIRP = `http://localhost:3333/airports?search=${query}`;


const getDashboardData = async query => {
    const ric = await fetch(`${API_URL_DEST}/destinations?search=${query}`)
    const data = ric.json()
    console.log(data)
}

(async () => {

})();

getDashboardData(`london`)