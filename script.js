var num = prompt ("Please enter a number with a decimal:");
var num2= prompt ("Please enter another number with a decimal:");

num = num.toString();
num = Math.ceil(num);
num2 =Math.floor(num2);

num3 = Math.floor((Math.random()*num)+1);
result = num + num2 + num3;
("The result after addition is "+result);

function writeNumber(){
  document.querySelector("#generate").innerHTML = num3;

}
function addMe(){
  result =num +num2 +num3;
  writeNumber();
}
document.querySelector(".numbers").innerHTML =num;
document.querySelector(".numby").innerHTML =num2;
document.querySelector(".random").innerHTML =num3;
document.querySelector(".result").innerHTML = result;