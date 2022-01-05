var num = prompt("Please Enter Your Mark: ");

if(num >= 80 && num <= 100){
    document.write("A+");
}
else if(num >= 70 && num <= 79){
    document.write("A");
}
else if(num >= 60 && num <= 69){
    document.write("A-");
}
else if(num >= 50 && num <= 59){
    document.write("B");
}
else if(num >= 40 && num <= 49){
    document.write("C");
}
else if(num >= 33 && num <= 39){
    document.write("D");
}
else if(num >= 0 && num <= 33){
    document.write("F");
}
else{
    document.write("Invalid Input")
}