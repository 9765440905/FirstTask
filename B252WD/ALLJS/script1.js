var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
   // console.log(data);
    for(var i in data){
    var name=data[i].name;
    var lang=data[i].latlng;
   // console.log(name+" "+lang);  
    weatherdata(name,...lang);//Declared function call
 //current weatherdata need to seprated lat and lng value(shows in Open weather map and go 'By geographic coordinates'... API call)
 //lat and lng value seprated by spread operator(...)
//we also use latlng[0],latlng[1] but use spread beacause is more convient way to expand the array
    }
}
var weatherdata=function(name,lat,lang){
//console.log(name+" "+lat+" "+lang);
var request=new XMLHttpRequest();//To seprate rest countries as well as weather map we have created onemore function here
//the latlag value is continuosly changing so want to append(attached) value in terms of url...modify the url
var url='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=c19a69254c24ae6d84c1f33529cc3984&units=metric';
request.open('GET',url,true);
request.send();
request.onload=function(){
    var res=JSON.parse(this.response);
    console.log(`${name} : ${res.main.temp}`);
}


}
