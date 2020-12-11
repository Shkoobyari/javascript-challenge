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

var dateBtn = d3.select("#date-filter-btn");
var cityBtn = d3.select("#city-filter-btn");
var stateBtn = d3.select("#state-filter-btn");
var countryBtn = d3.select("#country-filter-btn");
var shapeBtn = d3.select("#shape-filter-btn");

var form = d3.select("#form");

var backLink = d3.select("#back-link");

dateBtn.on("click", runDateFilter);
cityBtn.on("click", runCityFilter);
stateBtn.on("click", runStateFilter);
countryBtn.on("click", runCountryFilter);
shapeBtn.on("click", runShapeFilter);

form.on("submit", runDateFilter);
backLink.on("click", runBack);

function runDateFilter() {
  d3.event.preventDefault();
  // hide table with all data
  // searchTable.html("");
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

  // searchTable.html("");
}

function runCityFilter() {
  d3.event.preventDefault();
  // hide table with all data
  // searchTable.html("");
  var tableArea = d3.select("#table-area");
  tableArea.style("display", "none");

  // display search table
  var searchTblArea = d3.select("#search-results-area");
  searchTblArea.style("display", "block");

  // Get search value
  var inputElement = d3.select("#city-input");
  var inputVal = inputElement.property("value");

  // filter sighting by date inputted by user
  var filteredCities = tableData.filter(
    (sighting) => sighting.city === inputVal
  );

  var searchTable = d3.select("#table-body-search");
  filteredCities.forEach((sighting) => {
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

  // searchTable.html("");
}
// }

function runStateFilter() {
  d3.event.preventDefault();
  // hide table with all data
  // searchTable.html("");
  var tableArea = d3.select("#table-area");
  tableArea.style("display", "none");

  // display search table
  var searchTblArea = d3.select("#search-results-area");
  searchTblArea.style("display", "block");

  // Get search value
  var inputElement = d3.select("#state-input");
  var inputVal = inputElement.property("value");

  // filter sighting by date inputted by user
  var filteredStates = tableData.filter(
    (sighting) => sighting.state === inputVal
  );

  var searchTable = d3.select("#table-body-search");
  filteredStates.forEach((sighting) => {
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

function runCountryFilter() {
  d3.event.preventDefault();
  // hide table with all data
  // searchTable.html("");
  var tableArea = d3.select("#table-area");
  tableArea.style("display", "none");

  // display search table
  var searchTblArea = d3.select("#search-results-area");
  searchTblArea.style("display", "block");
  var inputElement = d3.select("#country-input");
  var inputVal = inputElement.property("value");

  // filter sighting by date inputted by user
  var filteredCountries = tableData.filter(
    (sighting) => sighting.state === inputVal
  );

  var searchTable = d3.select("#table-body-search");
  filteredCountries.forEach((sighting) => {
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

function runShapeFilter() {
  d3.event.preventDefault();
  // hide table with all data
  // searchTable.html("");
  var tableArea = d3.select("#table-area");
  tableArea.style("display", "none");

  // display search table
  var searchTblArea = d3.select("#search-results-area");
  searchTblArea.style("display", "block");
  var inputElement = d3.select("#shape-input");
  var inputVal = inputElement.property("value");

  // filter sighting by date inputted by user
  var filteredShapes = tableData.filter(
    (sighting) => sighting.state === inputVal
  );

  var searchTable = d3.select("#table-body-search");
  filteredShapes.forEach((sighting) => {
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
