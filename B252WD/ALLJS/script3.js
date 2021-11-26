var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
 var data=JSON.parse(this.response);
 console.log(data);

 var res=data.reduce(((accumulator,ele)=> accumulator+ele.population),0);
 console.log(res); 


 var res=data.filter((ele)=>ele.region==="Asia");
 console.log(res);

 var res=data.filter((ele)=>ele.population<200000);
 console.log(res);

 var res=data.forEach(ele=>{
  console.log(ele.name+" "+ele.captital+" "+ele.flag);
  })

 var res=data.filter((ele)=>{
  for(var i in ele.currencies){
    if(ele.currencies[i].code==='USD'){
      return true;
    }
  }
  }).map(ele=>console.log(ele.name));

 }
  
  



 


