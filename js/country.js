const loadCountry = () => {
    fetch('http://127.0.0.1:5500/js/data.json')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (countries) => {
    console.log(countries[0])
    const container = document.getElementById('container');
    const countryHtml = countries.map(country => getSingleCountry(country)).join(' ');
    container.innerHTML = countryHtml
}

const getSingleCountry = (country) => {
    return `
            <div>
            <h1>${country.name.common}</h1>
            <img src="${country.flags.png}" alt="">
            </div>
            `
}
loadCountry()