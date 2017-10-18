'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total'];

var storePike = {
  location:'1st and Pike',
  min:'23',
  max:'65',
  avg:'6.3',
  averageSalesAllDay: [],
  simulateSales: function(min, max){
    console.log('inside simulated sales');
    for (var i = 0; i < 15; i++){
      console.log(i);
      var randomNum = Math.floor (Math.random() * (((storePike.min - storePike.max) + 1) + storePike.min));
      var averageSalesPerHour = storePike.avg * randomNum;
      console.log('Calculate average sales per hour: ' + averageSalesPerHour);
      storePike.averageSalesAllDay.push(averageSalesPerHour);
    }
  }
};
storePike.simulateSales();

var storeAirport = {
  location:'Seatac Airport',
  min:'3',
  max:'24',
  avg:'1.2',
  averageSalesAllDay: [],
  simulateSales: function(min, max){
    console.log('inside simulated sales');
    for (var i = 0; i < 15; i++){
      console.log(i);
      var randomNum = Math.floor (Math.random() * (((storeAirport.min - storeAirport.max) + 1) + storeAirport.min));
      var averageSalesPerHour = storeAirport.avg * randomNum;
      console.log('Calculate average sales per hour: ' + averageSalesPerHour);
      storeAirport.averageSalesAllDay.push(averageSalesPerHour);
    }
  }
};
storeAirport.simulateSales();

var storeCenter = {
  location:'Seattle Center',
  min:'11',
  max:'38',
  avg:'3.7',
  averageSalesAllDay: [],
  simulateSales: function(min, max){
    console.log('inside simulated sales');
    for (var i = 0; i < 15; i++){
      console.log(i);
      var randomNum = Math.floor (Math.random() * (((storeCenter.min - storeCenter.max) + 1) + storeCenter.min));
      var averageSalesPerHour = storeCenter.avg * randomNum;
      console.log('Calculate average sales per hour: ' + averageSalesPerHour);
      storeCenter.averageSalesAllDay.push(averageSalesPerHour);
    }
  }
};
storeCenter.simulateSales();

var storeHill = {
  location:'Capitol Hill',
  min:'20',
  max:'38',
  avg:'2.3',
  averageSalesAllDay: [],
  simulateSales: function(min, max){
    console.log('inside simulated sales');
    for (var i = 0; i < 15; i++){
      console.log(i);
      var randomNum = Math.floor (Math.random() * (((storeHill.min - storeHill.max) + 1) + storeHill.min));
      var averageSalesPerHour = storeHill.avg * randomNum;
      console.log('Calculate average sales per hour: ' + averageSalesPerHour);
      storeHill.averageSalesAllDay.push(averageSalesPerHour);
    }
  }
};
storeHill.simulateSales();

var storeAlki = {
  location:'Alki',
  min:'2',
  max:'16',
  avg:'4.6',
  averageSalesAllDay: [],
  simulateSales: function(min, max){
    console.log('inside simulated sales');
    for (var i = 0; i < 15; i++){
      console.log(i);
      var randomNum = Math.floor (Math.random() * (((storeAlki.min - storeAlki.max) + 1) + storeAlki.min));
      var averageSalesPerHour = storeAlki.avg * randomNum;
      console.log('Calculate average sales per hour: ' + averageSalesPerHour);
      storeAlki.averageSalesAllDay.push(averageSalesPerHour);
    }
  }
};
storeAlki.simulateSales();
