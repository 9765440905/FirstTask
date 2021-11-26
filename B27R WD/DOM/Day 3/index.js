var button = document.createElement('button');
button.innerHTML="Click Me";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    console.log("TusharMali");
}