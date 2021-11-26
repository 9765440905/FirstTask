//1. create a xml http requst obeject
var request= new XMLHttpRequest();
//2.open /initiate a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending the connection
request.send();
//4.receving the data(sucessfully received from server)
//the data received from the will be of string format
request.onload=function(){
var data=JSON.parse(this.response);
console.log(data); 
for(var i=0;i<data.length;i++){
    console.log(data[i].name);
}

}