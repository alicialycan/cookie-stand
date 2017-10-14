'use strict';

/*var stuffForFirstRow = ['1st And Pike', 2, 4, 6, 8, 10];
var stuffForSecondRow = ['table', 3, 5, 7, 9, 1];

//accessthe table element in the html
var tableEl = document.getElementById('coffeeTable');

function tableRowMaker(inputArray) {
  //make a table row
  var trEl = document.createElement('tr');
  //iterate through array
  for(var i = 0; i < inputArray.length; i++) {
    var tdEl = document.createElement('td');//create
    tdEl.textContent = inputArray[i];//content
    trEl.appendChild(tdEl); //add cell to the row
  }
  tableEl.appendChild(trEl);//add row to the table
}
tableRowMaker(stuffForFirstRow);
tableRowMaker(stuffForSecondRow);
*/
var cookieStand = document.getElementById('cookieStand');
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total'];

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  for (var i = 0; i < hours.length; i ++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
}
