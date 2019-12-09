var map
var flightList = document.getElementById('flights');
var locations = [
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
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 9.59396,
      lng: 8.105306,
    },
    zoom: 6,
  })
  var infowindow = new google.maps.InfoWindow({})

  var marker, i
  // var locations2 = [
  //   [broadway.info, broadway.lat, broadway.long, 0],
  //   [belmont.info, belmont.lat, belmont.long, 1],
  //   [sheridan.info, sheridan.lat, sheridan.long, 2],
  // ]
  for (i = 0; i < locations.length; i++) {
  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].latitudeAirport, locations[i].longitudeAirport),
      map: map,
    })
    let info = `<br>${locations[i].nameAirport} Airport<br>\
    <a href="${locations[i].directions}">Get Directions</a>
    <br><a href="#" f-id="${i}" class="f-schedule">Get Airport flight shedules</a>`;
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

// fill header
fillHeader = (type) => `
<h3 style="color:black; text-align: center; position: relative; top: 10px;">${type}</h3>
<tr>
  <th>From</th>
  <th>To</th>
  <th>Airline</th>
  <th>Status</th>
  <th>Time</th>
</tr>`;
fillRows = (data, index, type) => `
<tr class="highlight parcel-row" data-index="${index}">
  <td class="select-parcel" data-index="${index}"> ${data.departure.iataCode}</td>
  <td class="select-parcel" data-index="${index}" id="destination${data.id}"> ${data.arrival.iataCode}</td>
  <td class="select-parcel" data-index="${index}"> ${data.airline.name}</td>
  <td class="select-parcel" data-index="${index}"> ${data.status}</td>
  <td class="select-parcel" data-index="${index}"> ${moment(data[type].scheduledTime).fromNow()}</td>
</tr>`;
// const k ={
//   "type": "departure",
//   "status": "landed",
//   "departure": {
//   "iataCode": "LOS",
//   "icaoCode": "DNMM",
//   "terminal": "I",
//   "gate": null,
//   "baggage": null,
//   "delay": null,
//   "scheduledTime": "2019-12-02T03:50:00.000",
//   "estimatedTime": null,
//   "actualTime": null,
//   "estimatedRunway": "2019-12-02T04:35:00.000",
//   "actualRunway": "2019-12-02T04:35:00.000"
//   },
//   "arrival": {
//   "iataCode": "ACC",
//   "icaoCode": "DGAA",
//   "terminal": "3",
//   "gate": null,
//   "baggage": null,
//   "delay": null,
//   "scheduledTime": "2019-12-02T03:55:00.000",
//   "estimatedTime": null,
//   "actualTime": null,
//   "estimatedRunway": "2019-12-02T04:13:00.000",
//   "actualRunway": "2019-12-02T04:13:00.000"
//   },
//   "airline": {
//   "name": "Air Italy",
//   "iataCode": "IG",
//   "icaoCode": "ISS"
//   },
//   "flight": {
//   "number": "841",
//   "iataNumber": "IG841",
//   "icaoNumber": "ISS841"
//   },
//   "codeshared": null
//   }
// fetch orders only made by logged in user
const getFlights = (route, type) => { 
  const status = [];
  fetch(route)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      const departures = data;
      // load parcel table
      selectedPage = 1;
      const departureHeader = fillHeader(`${type}s`.toUpperCase());
      // const paginate = pagination();
      let departureDetails = '',
        index = 0;
      flightList.innerHTML += departureHeader;
        departures.map((departure) => {
          departureDetails = fillRows(departure, index, type);
          flightList.innerHTML += departureDetails;
          departureDetails = '';
          index += 1;
        })
        return '';
      });
  };
const addScheduleClick = () => {
  document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.className === 'f-schedule') {
      flightList.innerHTML = "";
      // do your action on your 'li' or whatever it is you're listening for
      console.log(locations[event.target.getAttribute('f-id')]);
      const iata = locations[event.target.getAttribute('f-id')].codeIataAirport;
      const routeD = `https://aviation-edge.com/v2/public/timetable?key=d173c5-1ccc59&iataCode=${iata}&type=departure`;
      const routeA = `https://aviation-edge.com/v2/public/timetable?key=d173c5-1ccc59&iataCode=${iata}&type=arrival`;
      getFlights(routeD, 'departure');
      getFlights(routeA, 'arrival');
    }
  });
}
window.onload = () => {
  addScheduleClick();
};