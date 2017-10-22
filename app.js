'use strict';

//Declare variables required for page construction
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var locations = [];
var salesPerHour = [];
var netTotalLocationsSales = 0;
var newLocations = document.getElementById('location_info'); //Accesses the input form
var tableDataDisplay = document.getElementById('sales_report'); //Accesses the data table

//Constructor Function
var Stores = function(minCustPerHour, maxCustPerHour, avgCookieSoldPerHour, location) {
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesSoldPerHour = avgCookieSoldPerHour;
  this.location = location;
  this.lowerLocation = location.toLowerCase();
  this.randCustPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0; //Set total daily cookies to zero
  this.calcRandCustPerHour(); //Run the method to calculate the customers per hour for the object
  this.calcCookiesSoldPerHour(); //Run the method to calculate the cookies sold per hour for the object
  locations.push(this); //Push newly constructed object to locations array
};
//Method to generate random number of customers per hour based on min/max customers
Stores.prototype.calcRandCustPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
  }
};
//Method to calc cookies sold per hour = (randCustByHour * cookieSoldByHour)
Stores.prototype.calcCookiesSoldPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesSoldPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesSoldPerHour));
    this.totalCookies += this.cookiesSoldPerHour[i];
  }
};

//Method to render the table body
Stores.prototype.renderTableBody = function() {
  var trEl = document.createElement('tr'); //Create a row for each location
  var tdEl = document.createElement('td'); //Create a column for the location_info
  tdEl.textContent = this.location; //Add location name to the column
  trEl.appendChild(tdEl); //Add location name column to table row
  for (var i = 0; i < hours.length; i++) { //create a column 'for each store hour' loop
    tdEl = document.createElement('td'); //create a column for each store hour
    tdEl.textContent = this.cookiesSoldPerHour[i]; //Add sales per hour of cookies per location [i] to hourly column
    trEl.appendChild(tdEl); //Add sales per hour of cookies per location to column for location row [i]
  }
  tdEl = document.createElement('td'); //Create a column for total cookies sold per cookie-stand location [i]
  tdEl.textContent = this.totalCookies; //Create a column for total daily cookies sold total
  trEl.appendChild(tdEl); //Add daily cookies total sold to cookie-stand location
  tableDataDisplay.appendChild(trEl); //Add row for each location to sales table
};

//Construct new objects for each location
new Stores(23, 65, 6.3, '1st and Pike');
new Stores(3, 24, 1.2, 'SeaTac Airport');
new Stores(11, 38, 3.7, 'Seattle Center');
new Stores(20, 38, 2.3, 'Capitol Hill');
new Stores(2, 16, 4.6, 'Alki');

//Render all Locations objects into table
function renderLocations() {
  tableDataDisplay.innerHTML = ''; //Clear data table
  salesPerHour = []; //Clear sales by hour of all Locations
  netTotalLocationsSales = 0; //Clear total sales of all locations
  renderTableHeader(); //render the header for the table
  for (var i = 0; i < locations.length; i++) { //loop through the store locations array to render
    locations[i].renderTableBody(); //render the table body for current store locations
  }
  calcTotalSales(); //calculate new sales calcTotalSales
  renderTableFooter(); //render table footer
}

//Create event listener function to run after submit button clicked
function addLocations(event) {
  event.preventDefault(); //prevent page from reloading after form is submitted

  var location = event.target.location.value; //Pull text from form to build object
  var minCustPerHour = parseInt(event.target.min_customers.value); //Pull text from form to build object
  var maxCustPerHour = parseInt(event.target.max_customers.value);
  var avgCookieSoldPerHour = parseFloat(event.target.avg_cookies.value);

  if (maxCustPerHour < minCustPerHour) {
    alert('Maximum customers per hour must be greater than or equal to minimum customers per hour');
  } else {
    new Stores(minCustPerHour, maxCustPerHour, avgCookieSoldPerHour, location);
  }

  // event.target.location.value = null; //Remove text from form after submit
  // event.target.minCustPerHour.value = null; //Remove text from form after submit
  // event.target.maxCustPerHour.value = null; //Remove text from form after submit
  // event.target.avgCookiesSoldPerHour.value = null; //Remove text from form after submit

  renderLocations(); //run renderLocations function
}

//Render table header
function renderTableHeader() {
  var tableHeadEl = document.createElement('tablehead'); //create table header element
  var trEl = document.createElement('tr'); //create table row element for each store location
  var thEl = document.createElement('th'); // create table header column for store hours
  thEl.textContent = ''; //Create a blank space for the first column in table header row
  thEl.setAttribute('id', 'tableheaderspace');
  trEl.appendChild(thEl); //Add blank space to table header row
  for (var j = 0; j < hours.length; j++) {
    thEl = document.createElement('th'); //Create a table header row to hold store hours
    thEl.setAttribute('id', 'tableheaderrow');
    thEl.textContent = hours[j]; //Add store hours to table header
    trEl.appendChild(thEl); //Add store hours to table header row
  }
  thEl = document.createElement('th'); //Create a table header row
  thEl.textContent = 'Daily Location Totals'; //Add totals to table header row
  trEl.appendChild(thEl); //Add row to table head
  tableHeadEl.appendChild(trEl); //Add row to table head
  tableDataDisplay.appendChild(tableHeadEl); //Add table header row to data table
}
renderTableHeader();

//Render table footer
function renderTableFooter() {
  var trEl = document.createElement('tr'); //Create a row for totals
  var tdEl = document.createElement('td'); //Create a column for totals
  tdEl.textContent = 'Totals'; //Add totals text to column
  trEl.appendChild(tdEl); //Add totals text colum to totals row
  for (var k = 0; k < hours.length; k++) { //Create a loop for store hours column
    tdEl = document.createElement('td'); //Create a column for each store hour
    tdEl.textContent = salesPerHour[k]; //Add sales per hour of cookies[k] to hourly totals column
    trEl.appendChild(tdEl); //Add sales per hour of cookies[k] to totals row
  }
  tdEl = document.createElement('td');
  tdEl.textContent = netTotalLocationsSales; //Create a column for daily total cookies sold for all store locations
  trEl.appendChild(tdEl); //Add daily cookie total sales for all store locations
  tableDataDisplay.appendChild(trEl); //Add row for totals
}
renderTableFooter();

//Calc total sales
function calcTotalSales() {
  for (var l = 0; l < hours.length; l++) { //Create a loop for store hours
    var hourlyCookieSales = 0; //Set hourly cookie sales to 0 for each store hour
    for (var m = 0; m < locations.length; m++) {//Create a loop for store locations at current hour
      hourlyCookieSales += locations[m].cookiesSoldPerHour[l]; //Add current cookie sales per hour
      console.log(locations[m].cookiesSoldPerHour[l]);
    }
    salesPerHour.push(hourlyCookieSales); //Push total for cookie sales to table
  }
  for (var n = 0; n < locations.length; n++) { //Create a loop for store locations
    netTotalLocationsSales += locations[n].totalCookies; //Add total cookies sold for current store locations[m] to totalAllLocationsSales total
  }
}
calcTotalSales();

//Create Event Listener for submit button clicks on newLocations form
newLocations.addEventListener('submit', addLocations);

//Render all locations
renderLocations();
