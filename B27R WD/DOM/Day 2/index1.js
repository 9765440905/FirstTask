//creating a bootstrap table
var table=document.createElement('table');
table.setAttribute('class','table');

//creating a thead
var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');

//create a row
var tr=document.createElement('tr');

//create a th tag() 
var th1=createthtd('th','firstname');
var th2=createthtd('th','lastname');
tr.append(th1,th2);
thead.append(tr);

//create a body tag of table
var tbody=document.createElement('tbody');

//create a row
var tr=document.createElement('tr');

//create a td tag()

var td1=createthtd('td','guvi');
var td2=createthtd('td','geek');

//create a row
var tr1=document.createElement('tr');

//create a td tag()

var td3=createthtd('td','Tushar');
var td4=createthtd('td','Mali');


tr.append(td1,td2);
tr1.append(td3,td4);
tbody.append(tr,tr1);
table.append(thead,tbody);
document.body.append(table);

//<th> firstname </th>
//elementname-><th>
//value->firstname


//return value -> <th>firstname </th>
//return value -> <th>lastname </th>

//return value -> <td>guvi</td>
//return value -> <td>geek</td>

//create function for the repetative tags in table like th,td

function createthtd(elementname,value){
var A=document.createElement(elementname);
A.innerHTML=value;
return A;
}