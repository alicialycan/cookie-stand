'use strict';

//Constructor
var cookieStand = document.getElementById('cookieStand');
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total'];
var allLocations = [];
var totalcookiesPerHour = [];
var totalAllLocationsSales = 0;

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
      var randomNum = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      var averageSalesPerHour = this.avgCookieSoldPerHour * randomNum;
      console.log('Calculate average sales per hour: ' + averageSalesPerHour);
      this.cookiesSoldPerHour.push(Math.round(averageSalesPerHour));
    }
  };
  this.simulateSales();

  this.totalCookies = function() {
    console.log('calculate total cookie sales');
    var total = 0;
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      total = total + this.cookiesSoldPerHour[i];
    };
    return total;
  };
  this.totalCookies();
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

function makeHeaderRow() { //method to create table header rows (inherited to each location)
  var trEl = document.createElement('tr');
  for (var i = -1; i < hours.length; i++) {
    var thEl = document.createElement('th');
    if (i == -1) {
      thEl.textContent = ' ';
      trEl.appendChild(thEl);
    } else {
      thEl.textContent = hours[i];
      console.log('Calculate table rows:' + trEl);
      trEl.appendChild(thEl);
    }
  }
  cookieStand.appendChild(trEl);
};
makeHeaderRow();

function makeTableDataRow() { //method to create complete data rows (inherited to each location)
  for (var k = 0; k < allLocations.length; k++) {
    var trEl = document.createElement('tr');
    for (var j = -1; j < hours.length; j++) {
      var tdEl = document.createElement('td');
      if (j == -1) {
        tdEl.textContent = allLocations[k].name;
        trEl.appendChild(tdEl);
      } else if (j == 14) {
        tdEl.textContent = allLocations[k].totalCookies();
        console.log(tdEl);
        trEl.appendChild(tdEl);
      } else {
        tdEl.textContent = allLocations[k].cookiesSoldPerHour[j];
        console.log('Calculate table data:' + tdEl);
        trEl.appendChild(tdEl);
      }
    }
    cookieStand.appendChild(trEl);
  }
}
makeTableDataRow();

var tdTotalEl = document.createElement('td');
tdTotalEl.textContent = this.cookiesTotal;
trEl.appendChild(tdTotalEl);
tableEl.appendChild(trEl);

// this.totalCookies = function() {
//   for (var i = 0; i < this.cookiesSoldPerHour; i ++) {
//     this.cookiesTotal +=
//   }
// }

//Stretch Goals - Make Totals Footer Row in Table
// function makeFooterRow() {
//   var trEl = document.createElement('tr');
//   for (var k = 0; k < allLocations.length; k++) {
//     var totalCookiesSoldEachHour = allLocations[k];
//     var hourlyTotal = 0;
//     console.log('Cookies Sold Each Hour' + totalCookiesSoldEachHour[k]);
//     for (var j = 0; j < hours.length; j ++) {
//       hourlyTotal += totalCookiesSoldEachHour[k] + hours[0];
//     }
//   }
// }
// makeFooterRow();
//     console.log('******* ', + this.allLocations);
//     for (var j = -1; j < hours.length; j++) {
//       var tdEl = document.createElement('td');
//       if (j == 7) {
//         tdEl.textContent = allLocations[k].name;
//         trEl.appendChild(tdEl);
//       } else if (j == 14) {
//         tdEl.textContent = allLocations[k].totalCookies();
//         console.log(tdEl);
//         trEl.appendChild(tdEl);
//       } else {
//         tdEl.textContent = allLocations[k].cookiesSoldPerHour[j];
//         console.log('Calculate table data:' + tdEl);
//         trEl.appendChild(tdEl);
//       }
//     }
//     cookieStand.appendChild(ttrEl);
//   }
// };
// this.makeTableTotalRow();
//
// function totalSalesCalc() {
//   for (var i = 0; i < hours.length; i++) {
//     var totalcookiesPerHour = 0;
//     for (j = 0; j < allLocations.length; j++) {
//       cookiesSoldPerHour += allLocations[j].cookiesSoldPerHour[i];
//     }
//     cookiesSoldPerHour.push(cookiesSoldPerHour);
//   }
//   for (var k = 0; 0 < allLocations.length; k++) {
//     totalAllLocationsSales += allLocations[k].totalCookies;
//   }
// };
// this.totalSalesCalc();

// function hourlyTotal
//
// this.tossersPerHour = function() {
//   for (var i = 0; i < this.cookiesSoldPerHour.length; i ++) {
//     if (this.randCustByHour() / 20)
//   }
// }
