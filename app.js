var MOCK_BEER_INFO_DATA = {
  "beerInformation": [
    {
      "beerName": "Sculpin",
      "beerType": "India Pale Ale",
      "breweryName": "Ballast Point",
      "breweryLocation": "Escondido, California",
      "beerABV": 7,
      "beerIBU": 70,
      "beerAvailability": "Year-Round",
      "beerNotes": "hints of apricot, peach, mango and lemon flavors",
      "beerReviews": []
    },
    {
      "beerName": "Nut Brown",
      "beerType": "English Brown Ale",
      "breweryName": "AleSmith",
      "breweryLocation": "San Diego, California",
      "beerABV": 5,
      "beerAvailability": "Year-Round",
      "beerNotes": "rich, malt forward flavor profile balances notes of biscuit, mild cocoa and earthy hops",
      "beerReviews": []
    },
    {
      "beerName": "A Little Sumpin' Sumpin' Ale",
      "beerType": "American Pale Wheat Ale",
      "breweryName": "Lagunitas Brewing Company",
      "breweryLocation": "Azusa, California",
      "beerABV": 7.5,
      "beerAvailability": "Year-Round",
      "beerNotes": "Brewed with 50% wheat malt and all the 'C' hops",
      "beerReviews": []
    }
  ]
};

function getAllBeer(callback) {
  setTimeout(function(){callback(MOCK_BEER_INFO_DATA)}, 100);
}

function displayBeerInformation(data) {
  for(index in data.beerInformation) {
    $('body').append(
      '<p>' + data.beerInformation[index].beerName + '</p>'
    );
  }
}

function getAndDisplayBeerInformation() {
  getAllBeer(displayBeerInformation);
}

$(function() {
  getAndDisplayBeerInformation();
});
