let input  = document.querySelector("input")

function add1(a){
    input.value = input.value + a
}


function clr(){
    input.value = "0"
}


function delLast(){
    input.value = input.value.slice(0,input.value.length-1)

    //567.slice(0,2) = 
}

function eq(){
    input.value = eval(input.value)
}