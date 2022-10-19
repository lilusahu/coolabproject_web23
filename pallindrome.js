let bag=0;
let a=num;
let x=0;
while (num>=1){
    x=num%10;
        bag=(bag*10)+x;
        num=Math.floor(num/10);
}if(a==bag){
    console.log("Yes");
}else{
    console.log("No");
}