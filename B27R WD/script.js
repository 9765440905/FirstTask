var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  console.log(data);

  var res = data.reduce((accumulator, ele) => accumulator + ele.population, 0);
  console.log(res);

  var A = data.filter((element) => element.region);
  console.log(A);
};
