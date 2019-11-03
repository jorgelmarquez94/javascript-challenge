// from data.js
var tableData = data;

// YOUR CODE HERE!
//Prepare container
let tbody = d3.select('tbody');

function dropData(dataset){
    //Remember cleaning table body to get fresh data from filter
    tbody.html('');
    dataset.forEach((dr) => {
        let row=tbody.append('tr');
        Object.values(dr).forEach((value) =>{
            let cell = row.append('td');
            cell.text(value);
        });
    })
}
dropData(tableData)

function dropDownClick(){
    let selected_date = d3.select('#datetime').property('value');
    let dataFilter = tableData
    if(selected_date){
        dataFilter = dataFilter.filter((row) => row.datetime === selected_date)
    }
    dropData(dataFilter)
}

d3.selectAll('#filter-btn').on('click', dropDownClick);