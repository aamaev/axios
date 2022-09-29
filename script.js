const table = document.querySelector('table');
function createRow(obj){
    let rows = document.createElement('tr');

    for (let i = 0; i < Object.keys(obj).length; i++){
        let h = document.createElement('th');
        h.innerHTML = Object.values(obj)[i];
        rows.appendChild(h);
    }
    table.appendChild(rows); 
}

axios.get('./data.json')
    .then(response => {
        response.data.forEach(i => createRow(i))
    });




