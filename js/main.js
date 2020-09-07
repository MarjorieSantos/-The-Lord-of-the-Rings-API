const search = document.querySelector("#search");
const printResponse = document.querySelector('#div-response')

const getValuesOption = (event) => {
    const values = event.target.value;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer Odu9qXIcvThXu6TP90wH',
        }
    }

    fetch(`https://the-one-api.dev/v2/${values}`, options)
        .then(response => {
            response.json()
                .then(response => {
                    printResponse.innerHTML = JSON.stringify(response.docs)
                })
            //trazer a resposta no formato de json=
        })
}

search.addEventListener('change', getValuesOption);