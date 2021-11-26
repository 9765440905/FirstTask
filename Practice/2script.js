var request=new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c19a69254c24ae6d84c1f33529cc3984',true);
request.send();
request.onload=function(){
var data=JSON.parse(this.response);
console.log(data);
for(var i=0;i<data.length;i++){
console.log(data[i].main.temp_max+" "+data[i].main.temp_min);
}
}