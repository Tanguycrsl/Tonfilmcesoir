Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

  
var USA = {
  type: "scatter",
  mode: "lines",
  x: [1970, 1971, 1972, 1973, 1974, 1975],
  y: [8,10,32,21,20],
  line: {color: '#17BECF'}
}

var France = {
  type: "scatter",
  mode: "lines",
  x: [1970, 1971, 1972, 1973, 1974, 1975],
  y: [0, 0, 2, 5, 10, 12],
  line: {color: '#7F7F7F'}
}

var data = [USA,France];
    
var layout = {
  title: 'Custom Range', 
  xaxis: {
    range: ['1970-01-01', '1975-01-01'], 
    type: 'date'
  }, 
  yaxis: {
    autorange: true, 
    range: [0, 50], 
    type: 'linear'
  }
};

Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});
})
