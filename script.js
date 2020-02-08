// global variables
let map;
// reference to the flights slot on the table element in the hmtl
let flightList = document.getElementById('flights');
// reference to the f-block slot on the modal(pop up) in the html
let fBlock = document.getElementById('f-block');
// for holding data for all the departure flights for a airport
let departures = [];
// for holding data for all the arrival flights for a airport
let arrivals = [];

// data for nigerian airports only
const locations = [
  {
    "nameAirport": "Jos",
    "codeIataAirport": "JOS",
    "codeIcaoAirport": "DNJO",
    "latitudeAirport": "9.868056",
    "longitudeAirport": "8.893056",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "JOS",
    "distance": "91.6846239620944",
    "directions": "https://goo.gl/maps/fayXNeZNftzCVnzUA"
  },
  {
    "nameAirport": "Nnamdi Azikiwe International Airport",
    "codeIataAirport": "ABV",
    "codeIcaoAirport": "DNAA",
    "latitudeAirport": "9.004614",
    "longitudeAirport": "7.270447",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "ABV",
    "distance": "112.79643895385152",
    "directions": "https://goo.gl/maps/nYpAovJC6VaHYWVj6"
  },
  {
    "nameAirport": "Kaduna",
    "codeIataAirport": "KAD",
    "codeIcaoAirport": "DNKA",
    "latitudeAirport": "10.595833",
    "longitudeAirport": "7.440278",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "KAD",
    "distance": "133.2698907400214",
    "directions": "https://goo.gl/maps/EzzHUpdrxQAYh7sW7"
  },
  {
    "nameAirport": "Zaria",
    "codeIataAirport": "ZAR",
    "codeIcaoAirport": "DNZA",
    "latitudeAirport": "11",
    "longitudeAirport": "7.666667",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "ZAR",
    "distance": "163.77433805865715",
    "directions": "https://goo.gl/maps/cT2S4H6RFPjxrhJK6"
  },
  {
    "nameAirport": "Minna",
    "codeIataAirport": "MXJ",
    "codeIcaoAirport": "DNMN",
    "latitudeAirport": "9.616667",
    "longitudeAirport": "6.533333",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "MXJ",
    "distance": "172.60672139178234",
    "directions": "https://goo.gl/maps/bV1fTLbNCpiNDyTu6"
  },
  {
    "nameAirport": "Bauchi",
    "codeIataAirport": "BCU",
    "codeIcaoAirport": "",
    "latitudeAirport": "10.366667",
    "longitudeAirport": "9.8",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "BCU",
    "distance": "204.8013687296439",
    "directions": "https://goo.gl/maps/gG1uRe9sBgXsL1UA9"
  },
  {
    "nameAirport": "Makurdi",
    "codeIataAirport": "MDI",
    "codeIcaoAirport": "DNMK",
    "latitudeAirport": "7.75",
    "longitudeAirport": "8.533333",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "MDI",
    "distance": "210.66475461272793"
  },
  {
    "nameAirport": "Aminu Kano International Airport",
    "codeIataAirport": "KAN",
    "codeIcaoAirport": "DNKN",
    "latitudeAirport": "12.045549",
    "longitudeAirport": "8.522271",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "KAN",
    "distance": "276.7717542751854",
    "directions": "https://goo.gl/maps/ogEdEsjPoGqxdeAWA"
  },
  {
    "nameAirport": "Lawanti",
    "codeIataAirport": "GMO",
    "codeIcaoAirport": "DNGO",
    "latitudeAirport": "10.298056",
    "longitudeAirport": "10.898889",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "GMO",
    "distance": "316.26507395128925",
    "directions": "https://goo.gl/maps/Qu7MzRoLFvoeiHGt7"
  },
  {
    "nameAirport": "Enugu",
    "codeIataAirport": "ENU",
    "codeIcaoAirport": "DNEN",
    "latitudeAirport": "6.472048",
    "longitudeAirport": "7.56772",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "ENU",
    "distance": "352.6469916043863",
    "directions": "https://goo.gl/maps/wsadfsecs5Sn9icQ8"
  },
  {
    "nameAirport": "Katsina",
    "codeIataAirport": "DKA",
    "codeIcaoAirport": "",
    "latitudeAirport": "13.003712",
    "longitudeAirport": "7.660803",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "DKA",
    "distance": "382.7715158296875",
    "directions": "https://goo.gl/maps/1Qa5XCJN1h6QSSh26"
  },
  {
    "nameAirport": "Ilorin",
    "codeIataAirport": "ILR",
    "codeIcaoAirport": "DNIL",
    "latitudeAirport": "8.5",
    "longitudeAirport": "4.533333",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "ILR",
    "distance": "411.24569822817324",
    "directions": "https://goo.gl/maps/ECmpoBeJ1jrAZFws5"
  },
  {
    "nameAirport": "Akure",
    "codeIataAirport": "AKR",
    "codeIcaoAirport": "DNAK",
    "latitudeAirport": "7.25",
    "longitudeAirport": "5.083333",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "AKR",
    "distance": "422.9793062911876",
    "directions": "https://goo.gl/maps/H6gB9VEcHqNkYzRp7"
  },
  {
    "nameAirport": "Benin City",
    "codeIataAirport": "BNI",
    "codeIcaoAirport": "DNBE",
    "latitudeAirport": "6.316943",
    "longitudeAirport": "5.603863",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "BNI",
    "distance": "457.41701794279834",
    "directions": "https://goo.gl/maps/uz51edEzXLhykLcE9"
  },
  {
    "nameAirport": "Sam Mbakwe International",
    "codeIataAirport": "QOW",
    "codeIcaoAirport": "DNIM",
    "latitudeAirport": "5.427866",
    "longitudeAirport": "7.201676",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "QOW",
    "distance": "474.5027947278916",
    "directions": "https://goo.gl/maps/gR2zC3E3q7BSSZEG6"
  },
  {
    "nameAirport": "Yola",
    "codeIataAirport": "YOL",
    "codeIcaoAirport": "DNYO",
    "latitudeAirport": "9.266111",
    "longitudeAirport": "12.432222",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "YOL",
    "distance": "476.69599079559157",
    "directions": "https://goo.gl/maps/ZpwPioyqcdPxRxUb9"
  },
  {
    "nameAirport": "Sokoto",
    "codeIataAirport": "SKO",
    "codeIcaoAirport": "DNSO",
    "latitudeAirport": "13.006389",
    "longitudeAirport": "5.242222",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "SKO",
    "distance": "492.02603682291027",
    "directions": "https://goo.gl/maps/iBJR7kWBjcJTsPuR7"
  },
  {
    "nameAirport": "Warri",
    "codeIataAirport": "QRW",
    "codeIcaoAirport": "DNSU",
    "latitudeAirport": "5.594487",
    "longitudeAirport": "5.819282",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "QRW",
    "distance": "511.8343094276499",
    "directions": "https://goo.gl/maps/xFGLXyWKLFHsLqJW7"
  },
  {
    "nameAirport": "Calabar",
    "codeIataAirport": "CBQ",
    "codeIcaoAirport": "DNCA",
    "latitudeAirport": "4.96889",
    "longitudeAirport": "8.347415",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "CBQ",
    "distance": "515.7042475366785",
    "directions": "https://goo.gl/maps/sPk3c2Xc4NWN5YzX6"
  },
  {
    "nameAirport": "Ibadan",
    "codeIataAirport": "IBA",
    "codeIcaoAirport": "DNIB",
    "latitudeAirport": "7.431944",
    "longitudeAirport": "3.911111",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "IBA",
    "distance": "520.8340130580752",
    "directions": "https://goo.gl/maps/6JDH3VfBf1s46Lrc8"
  },
  {
    "nameAirport": "Akwa Ibom International",
    "codeIataAirport": "QUO",
    "codeIcaoAirport": "DNAI",
    "latitudeAirport": "4.876463",
    "longitudeAirport": "8.085693",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "QUO",
    "distance": "525.3072207626313",
    "directions": "https://goo.gl/maps/RrJoB7sFmFWMz1VP8"
  },
  {
    "nameAirport": "Port Harcourt",
    "codeIataAirport": "PHC",
    "codeIcaoAirport": "DNPO",
    "latitudeAirport": "5.006506",
    "longitudeAirport": "6.9499",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "PHC",
    "distance": "526.5125729394607",
    "directions": "https://goo.gl/maps/VtzfBZyga1sH8pLi6"
  },
  {
    "nameAirport": "Port Harcourt City",
    "codeIataAirport": "PHG",
    "codeIcaoAirport": "",
    "latitudeAirport": "5.033333",
    "longitudeAirport": "6.833333",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "PHC",
    "distance": "526.8977820599812",
    "directions": "https://goo.gl/maps/NuVhJcAN7iQ911Ud7"
  },
  {
    "nameAirport": "Maiduguri",
    "codeIataAirport": "MIU",
    "codeIcaoAirport": "DNMA",
    "latitudeAirport": "11.844167",
    "longitudeAirport": "13.068056",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "MIU",
    "distance": "597.9552699660488",
    "directions": "https://goo.gl/maps/sX4G7ojA29nCD3Zr8"
  },
  {
    "nameAirport": "Murtala Muhammed",
    "codeIataAirport": "LOS",
    "codeIcaoAirport": "DNMM",
    "latitudeAirport": "6.577871",
    "longitudeAirport": "3.321178",
    "timezone": "Africa/Lagos",
    "GMT": "1",
    "phone": "",
    "nameCountry": "Nigeria",
    "codeIso2Country": "NG",
    "codeIataCity": "LOS",
    "distance": "625.2203625585609",
    "directions": "https://goo.gl/maps/asUkmozGKVuoqCmXA"
  }
];

// this function initiate the google map using the google map javascript sdk
const initMap = () => {

  // instantiate a new google map object with a map slot reference and the longitude and latitude for the center (nigeria) and then the zoom level of the map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 9.59396,
      lng: 8.105306,
    },
    zoom: 6,
  })
  // instantiate the info window on the google map sdk with an empty object
  var infowindow = new google.maps.InfoWindow({})

  // loop through location and use it to pin a marker via the location longitude and latitude
  var marker, i
  for (i = 0; i < locations.length; i++) {
    // create a marker object using locations[i] latitudeAirport and longitudeAirport properties
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].latitudeAirport, locations[i].longitudeAirport),
      map: map,
    })
    // get additional information from the locations[i] object
    let info = `<br>${locations[i].nameAirport} Airport<br>\
    <a href="${locations[i].directions}">Get Directions</a>
    <br><a href="#" f-id="${i}" class="f-schedule">Get Airport flight shedules</a>`;

    // add event listener to the marker so it can pop up the google map info window
    google.maps.event.addListener(
      marker,
      'click',
      (function(marker, i) {
        return function() {
          infowindow.setContent(info)
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
  }
}

// fill header returns the html for the table header accepts the flight type as parameter
const fillHeader = (type) => `
<h3 style="color:black; text-align: center; position: relative; top: 10px;">${type}</h3>
<tr>
  <th>From</th>
  <th>To</th>
  <th>Airline</th>
  <th>Status</th>
  <th>Time</th>
  <th>Action</th>
</tr>`;

// fill rows returns the html for the table rows it accepts the row data the row index and the flight type as parameters
const fillRows = (data, index, type) => `
<tr class="highlight parcel-row" data-index="${index}">
  <td class="select-parcel" data-index="${index}"> ${data.departure.iataCode}</td>
  <td class="select-parcel" data-index="${index}" id="destination${data.id}"> ${data.arrival.iataCode}</td>
  <td class="select-parcel" data-index="${index}"> ${data.airline.name}</td>
  <td class="select-parcel" data-index="${index}"> ${data.status}</td>
  <td class="select-parcel" data-index="${index}"> ${moment(data[type].scheduledTime).fromNow()}</td>
  <td><button class="btn-small btn-primary f-details" id="detail-${index}" data-index="${index}" data-type="${type}">details</button></td>
</tr>`;

// fetch flights from the api and inserts into the flight slot in the ui
const getFlights = async (route, type, idx) => { 
  console.log('idx', idx);
  const status = [];
  // fetch is a ecma script standard optimized for fetching data form external sources (apis) fetch implements the javascript promise patterner and it's asynchrous  and thenable.
  fetch(route)
    .then(res => res.json())
    .then((data) => {
      console.log('data', data);
      // store the flight data inside the flight variable
      const flights = data;
      selectedPage = 1;
      // retrieve the header for the flights by calling fillHeader with the departure type
      const departureHeader = fillHeader(`${type}s`.toUpperCase());
      let departureDetails = '';
      let index = idx;
      // use the flight list reference to insert the header into the flight slot via the innerHtml property of the fligth reference
      flightList.innerHTML += departureHeader;
        // use the map object to loop through the fligths and then retrieve the row html markup for each fligth via fillRow and then insert into the dom via the fligthList reference 
        flights.map((flight) => {
          // console.log('departure', departure.flight.iataNumber);
          if(type === 'departure') {
            departures.push(flight);
          }
          else {
            arrivals.push(flight);
          }
          departureDetails = fillRows(flight, index, type);
          flightList.innerHTML += departureDetails;
          departureDetails = '';
          index += 1;
        })
        return '';
      });
  };
// get flight details and insert it into the dom via the fblock reference using the html node innerHTML property.
const getStatus = async (route,  dat, type) => { 
  // const status = [];
  fetch(route)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      if(type === 'departure') {
        fBlock.innerHTML = '';
        console.log(route);
        fBlock.innerHTML += `<p class="tiny"><b>Fligth from:</b> ${data[0].nameAirport} ${data[0].nameCountry}</p>`
        fBlock.innerHTML += `<p class="tiny"><b>Scheduled for departure at:</b> ${moment(dat['departure'].scheduledTime).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>`
        fBlock.innerHTML += `<p class="tiny"><b>Airline: </b>${dat['airline'].name}</p>`
        fBlock.innerHTML += `<p class="tiny"><b>Status: </b>${dat['status']}</p>`
      }
      else {
        fBlock.innerHTML += `<p class="tiny"><b>Fligth to:</b> ${data[0].nameAirport} ${data[0].nameCountry}</p>`
        fBlock.innerHTML += `<p class="tiny"><b>Scheduled for arrival at:</b> ${moment(dat['arrival'].scheduledTime).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>`
        fBlock.innerHTML += `<p class="tiny"><b>Airline: </b>${dat['airline'].name}</p>`
        fBlock.innerHTML += `<p class="tiny"><b>Status: </b>${dat['status']}</p>`
      }
        return '';
      });
  };
// it ensures the modal is shown by removing the hidden class from it
const showModal = () => {
  document.getElementById('flight-detail').classList.remove('hidden');
};

// function for dismissing modal that simply adds the hidden class to the element so it doesn't get displayed
const dismissModal = () => {
  document.getElementById('flight-detail').classList.add('hidden');
};
// it schedules a click event listener to all elements with f-schedule classname (all flight rows) and on clicking it, get flightstatus and also displays the fligth details modal
const addScheduleClick = async () => {
  // delegate the body click event to f-schedule if the event target classname is f-schedule and then execute the needed functionalities
  document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.className === 'f-schedule') {
      flightList.innerHTML = "";
      flights = [];
      // use the element's f-id attribute value (id value) to retrieve the airport data from the locations array and then finally retrieve it's codIataAirport property
      const iata = locations[event.target.getAttribute('f-id')].codeIataAirport;
      // create route for departure
      const routeD = `https://aviation-edge.com/v2/public/timetable?key=d173c5-1ccc59&iataCode=${iata}&type=departure`;
      // create route for arrival
      const routeA = `https://aviation-edge.com/v2/public/timetable?key=d173c5-1ccc59&iataCode=${iata}&type=arrival`;
      // get fligths for departure
      console.log(event.target);
      getFlights(routeD, 'departure', event.target.getAttribute('f-id'));

      // get flights for arrivals
      getFlights(routeA, 'arrival', event.target.getAttribute('f-id'));
    } 
    // delegate the body click event to the element whose class name includes f-details and perform the required actions
    if (event.target.className.includes('f-details')) {
      // get the id for the row
      const id = event.target.getAttribute('data-index');
      // get the flight type for the row
      const type = event.target.getAttribute('data-type');
      console.log(id, type);
      let data;
      if ( type === 'departure') {
        // console.log(departures.length)
        // retrieve the data from departures using the id
        data = departures[id];
        // get the departure iataCode
        const departure = data['departure']['iataCode'];
        // the route for departure
        const route2 = `https://aviation-edge.com/v2/public/airportDatabase?key=d173c5-1ccc59&codeIataAirport=${departure}`;
        // get the departure status
        const departureData = getStatus(route2, data, 'departure');
        // get the departure code for arrival
        const arrival = data['arrival']['iataCode'];
        // the route for arrival
        const route1 = `https://aviation-edge.com/v2/public/airportDatabase?key=d173c5-1ccc59&codeIataAirport=${arrival}`;
        // get the arrival status
        const arrivalData = setTimeout(getStatus, 1000, route1, data, 'arrival');
        // console.log(arrivalData, departureData);
      }
      else {
        // retrieve the data from arrivals using the arrivals array
        data = arrivals[id];
        // get departure iataCode
        const departure = data['departure']['iataCode'];
        // get the route for departure
        const route2 = `https://aviation-edge.com/v2/public/airportDatabase?key=d173c5-1ccc59&codeIataAirport=${departure}`;
        // get the status for departure
        const departureData = getStatus(route2, data, 'departure');
        // get the iatacode for arrival
        const arrival = data['arrival']['iataCode'];
        // get the route for arrival
        const route1 = `https://aviation-edge.com/v2/public/airportDatabase?key=d173c5-1ccc59&codeIataAirport=${arrival}`;
        // ge the status of arrival
        const arrivalData = setTimeout(getStatus, 1000, route1, data, 'arrival');
        // console.log(arrivalData, departureData);
      }
      console.log(data);
      // show the modal
      showModal();
    }
    // delegat the body click for the element whose classname includes dismiss-modal and execute the necessary functions
    if(event.target.className.includes('dismiss-modal')) {
      // dismiss the modal
      dismissModal();
    }
  });
}
 
// the windows.onload functions ensures the javascript engine is ready before executing script.js
window.onload = async () => {
  // call addScheduleClick()
  initMap();
  addScheduleClick();
  // load departure route for lagos
  const routeD = `https://aviation-edge.com/v2/public/timetable?key=d173c5-1ccc59&iataCode=LOS&type=departure`;
  
  // load arrival route for lagos
  const routeA = `https://aviation-edge.com/v2/public/timetable?key=d173c5-1ccc59&iataCode=LOS&type=arrival`;
  // load departure flights for lagos
  getFlights(routeD, 'departure', 0);
  setTimeout(getFlights, 1000, routeA, 'arrival', 0);
};
