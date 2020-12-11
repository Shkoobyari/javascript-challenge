// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
// Add rows to table
tableData.forEach(function (sighting) {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function ([key, val]) {
    var cell = row.append("td");
    cell.text(val);
  });
});

var dateBtn = d3.select("#filter-btn");

var form = d3.select("#form");

var backLink = d3.select("#back-link");

dateBtn.on("click", runDateFilter);
form.on("submit", runDateFilter);
backLink.on("click", runBack);

function runDateFilter() {
  d3.event.preventDefault();
  // hide table with all data
  var tableArea = d3.select("#table-area");
  tableArea.style("display", "none");

  // display search table
  var searchTblArea = d3.select("#search-results-area");
  searchTblArea.style("display", "block");

  // Get search value
  var inputElement = d3.select("#datetime-input");
  var inputVal = inputElement.property("value");

  // filter sighting by date inputted by user
  var filteredDates = tableData.filter(
    (sighting) => sighting.datetime === inputVal
  );

  //
  var searchTable = d3.select("#table-body-search");
  filteredDates.forEach((sighting) => {
    // var list = d3.select("#search-results-list");
    var row = searchTable.append("tr");
    var cell = row.append("td");
    cell.text(sighting.datetime);
    var cell = row.append("td");
    cell.text(sighting.city);
    var cell = row.append("td");
    cell.text(sighting.state);
    var cell = row.append("td");
    cell.text(sighting.country);
    var cell = row.append("td");
    cell.text(sighting.shape);
    var cell = row.append("td");
    cell.text(sighting.durationMinutes);
    var cell = row.append("td");
    cell.text(sighting.comments);
  });
}

function runBack() {
  // hide table with all data
  var tableArea = d3.select("#table-area");
  tableArea.style("display", "block");

  // display search table
  var searchTblArea = d3.select("#search-results-area");
  searchTblArea.style("display", "none");
}
