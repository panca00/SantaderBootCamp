let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function somar(Num1,Num2) {
    if(typeof Num1==="number" && typeof Num2==="number"){
        return Num1+Num2;
    } else{
        return Number(Num1)+Number(Num2);
    }

    return Num1+Num2
}


button.addEventListener('click',()=>{
    console.log(somar(input1.value,input2.value))
})