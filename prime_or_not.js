let num=113
let count_factors=0;
for(let i=0;i<=num;i++){
  if (num%i==1){
    count_factors++;
  }
}
if(count_factors==2){
  console.log(num,"is prime")
}else{
  console.log(num,"is not prime")
}