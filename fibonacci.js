function fibo(n){
  var results=[0,1];
  let i=1;
  while(i<n){
    results=[results[1],results.reduce((previousValue, currentValue) => previousValue + currentValue)]
    i++;
  }
   return results[1];
}

function fibo(n){
  if (n<2) return n;
  var results=new Array(n-1).fill(0);
 results[0]=1;
  
 let tmp=1;
   return results.reduce((previousValue, currentValue) => {
     let r= previousValue + tmp
     tmp=previousValue;
     return r;
   })
}

function fibo(n, results = []) {
    if (fibo <2) return n;
    if (results[fibo]) return results[fibo];
    results[fibo] = fibo(fibo - 2, results) + fibo(fibo - 1, results);    
	return results[n];
}
