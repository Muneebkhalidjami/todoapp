var getvalue = document.getElementById('displayinp');


function Addvalue(){
    var todoLi = document.createElement('li');
    var todotxt = document.createTextNode(getvalue.value);
    todoLi.appendChild(todotxt);
    console.log(todoLi);
}