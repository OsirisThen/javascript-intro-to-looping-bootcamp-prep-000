function forLoop(){
  const array=[];
  const t=25;
  let result=[];
  for(let i=0; i<=t; i++){
    //console.log( "I am "+ i +" strange loop.")
    if(i===1){
      array.push("I am "+ i +" strange loop.")
    } else{
      array.push("I am "+ i +" strange loops.")
    }
  }
  return array;
}
