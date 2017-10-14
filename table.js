'use strict';

//Constructor
var cookieStand = document.getElementById('cookieStand');
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total'];
var allLocations = [];
var totalcookiesByHour = 0;
var netTotal = 0;

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0;
  allLocations.push(this);
  this.simulateSales = function() {
    console.log('inside simulated sales');
    for (var i = 0; i <= 15; i++) {
      console.log(i);
      var randomNum = Math.floor(Math.random() * (((this.maxCustPerHour - this.minCustPerHour) + 1) + this.minCustPerHour));
      var averageSalesPerHour = this.avgCookieSoldPerHour * randomNum;
      console.log('Calculate average sales per hour: ' + averageSalesPerHour);
      this.cookiesSoldPerHour.push(Math.round(averageSalesPerHour));
    }
  };
  this.simulateSales();
};

function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
};
makeStands();

console.log(allLocations);

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  for (var i = 0; i < hours.length; i ++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    console.log('Calculate table rows:' + trEl);
    trEl.appendChild(thEl);
  }
  cookieStand.appendChild(trEl);
};
makeHeaderRow();

function makeTableDataRow() {
  for (var k = 0; k < allLocations.length; k ++) {
    var trEl = document.createElement('tr');
    for (var j = 0; j < hours.length; j ++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = allLocations[k].cookiesSoldPerHour[j];
      console.log('Calculate table data:' + tdEl);
      trEl.appendChild(tdEl);
    }
    cookieStand.appendChild(trEl);
  }
}
makeTableDataRow();

console.log(allLocations[0].cookiesSoldPerHour);
