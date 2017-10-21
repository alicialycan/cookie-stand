'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

//1st and Pike location
var firstAndPike = {
  location: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log('Number of Customers Per Hour:' + this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log('Number of Total Cookies Sold Per Hour: ' + this.cookiesSoldByHour[j]);
    }
  },
  calcTotalCookies: function() {
    var total = 0;
    for (var k = 0; k < hours.length; k++) {
      total += this.cookiesSoldByHour[k];
    }
    this.totalCookies = total;
    console.log('Total: ' + total + ' cookies');
  },
  render: function() {
    var firstAndPike = document.getElementById('firstandpike');
    var firstAndPikeEl = document.getElementById('firstandpikeelement');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    firstAndPikeEl.appendChild(h3El);
    for (var l = 0; l < hours.length; l++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + this.cookiesSoldByHour[l] + ' cookies';
      console.log(liEl);
      firstAndPike.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + 'cookies';
    console.log(liEl);
    firstAndPike.appendChild(liEl);
  }
};
firstAndPike.render();

//SeaTac Airport location
var seaTacAirport = {
  location: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log('Number of Customers Per Hour:' + this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log('Number of Total Cookies Sold Per Hour: ' + this.cookiesSoldByHour[j]);
    }
  },
  calcTotalCookies: function() {
    var total = 0;
    for (var k = 0; k < hours.length; k++) {
      total += this.cookiesSoldByHour[k];
    }
    this.totalCookies = total;
    console.log('Total: ' + total + ' cookies');
  },
  render: function() {
    var seaTacAirport = document.getElementById('seatacairport');
    var seaTacAirportEl = document.getElementById('seatacairportelement');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    seaTacAirportEl.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + '; ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      seaTacAirport.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + 'cookies';
    console.log(liEl);
    seaTacAirport.appendChild(liEl);
  }
};
seaTacAirport.render();

//Seattle Center location
var seattleCenter = {
  location: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log('Number of Customers Per Hour:' + this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log('Number of Total Cookies Sold Per Hour: ' + this.cookiesSoldByHour[j]);
    }
  },
  calcTotalCookies: function() {
    var total = 0;
    for (var k = 0; k < hours.length; k++) {
      total += this.cookiesSoldByHour[k];
    }
    this.totalCookies = total;
    console.log('Total: ' + total + ' cookies');
  },
  render: function() {
    var seattleCenter = document.getElementById('seattlecenter');
    var seattleCenterEl = document.getElementById('seattlecenterelement');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    seattleCenterEl.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + '; ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      seattleCenter.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl);
    seattleCenter.appendChild(liEl);
  }
};
seattleCenter.render();

//Capitol Hill location
var capitolHill = {
  location: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log('Number of Customers Per Hour:' + this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log('Number of Total Cookies Sold Per Hour: ' + this.cookiesSoldByHour[j]);
    }
  },
  calcTotalCookies: function() {
    var total = 0;
    for (var k = 0; k < hours.length; k++) {
      total += this.cookiesSoldByHour[k];
    }
    this.totalCookies = total;
    console.log('Total: ' + total + ' cookies');
  },
  render: function() {
    var capitolHill = document.getElementById('capitolhill');
    var capitolHillEl = document.getElementById('capitolhillelement');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    capitolHillEl.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + '; ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      capitolHill.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl);
    capitolHill.appendChild(liEl);
  }
};
capitolHill.render();

//Alki location
var alki = {
  location: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookieSoldPerHour: 4.6,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log('Number of Customers Per Hour: ' + this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log('Number of Total Cookies Sold Per Hour: ' + this.cookiesSoldByHour[j]);
    }
  },
  calcTotalCookies: function() {
    var total = 0;
    for (var k = 0; k < hours.length; k++) {
      total += this.cookiesSoldByHour[k];
    }
    this.totalCookies = total;
    console.log('Total: ' + total + ' cookies');
  },
  render: function() {
    var alki = document.getElementById('alki');
    var alkiEl = document.getElementById('alkielement');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.location;
    alkiEl.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + '; ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      alki.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl);
    alki.appendChild(liEl);
  }
};
alki.render();
