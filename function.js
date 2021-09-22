function getequation(){
    return document.getElementById("equation-value").innerText;
}
function printequation(num){
    document.getElementById("equation-value").innerText=num;
}
function getoutput(){
    return document.getElementById("output-value").innerText;
}
function printoutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
    document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
// checking:  printoutput("66778685");
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
// checked this using : alert(reverseNumberFormat(getoutput()));