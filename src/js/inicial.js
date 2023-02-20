fetch('https://api.datos.gob.mx/v2/Records')
.then(response => response.json())

.then(data => mostrardata(data))
.catch(err => console.log('error' , err))

const mostrardata = (data) =>{
    results = data.results
    results = data.pagination
    console.log(data);
    console.log(data.results[0].compiledRelease.ciclo);


}




