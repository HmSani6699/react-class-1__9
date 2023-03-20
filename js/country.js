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
            <div id="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" alt="">
            </div>
            `
}
loadCountry()