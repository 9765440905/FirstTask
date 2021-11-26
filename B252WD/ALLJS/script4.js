var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(var i in data){
        try{ 
           var name=data[i].name;
           var lang=data[i].latlng;
           if(lang.length===0) throw new Error("longitude and longitude is not found");
        // console.log(name+" "+lang);  
           weatherdata(name,...lang);
           }
        catch(e){
                 console.log("Invaid coordinates for the country"+name+" "+e.message);
                }
    }

}
var weatherdata=function(name,lat,lang){
//console.log(name+" "+lat+" "+lang);
var request=new XMLHttpRequest();
var url='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=c19a69254c24ae6d84c1f33529cc3984&units=metric';
request.open('GET',url,true);
request.send();
request.onload=function(){
    try{
        var res=JSON.parse(this.response);
        console.log(`${name} : ${res.main.temp}`); 
       }
   catch(e){
            console.log("Undefined Response"+name);
           }
}


}
