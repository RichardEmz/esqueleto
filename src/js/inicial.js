fetch('https://api.datos.gob.mx/v2/Records')
.then(response => response.json())

.then(data => mostrardata(data))
.catch(err => console.log('error' , err))

const mostrardata = (data) =>{
    console.log(data);
    console.log(data.results)
    let datos = data.results
    let body = ''
    for(let i = 0; i < datos.length; i++){
        body += `<tr><td>${datos[i]._id}</td><td>${datos[i].compiledRelease.ciclo}</td><td>${datos[0].compiledRelease.publisher.name}</td><td>${datos[0].compiledRelease.publisher.uri}</td></tr>`

    }

    document.getElementById('data').innerHTML = body



}




