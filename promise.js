const p = new Promise((resolve, reject) => {
   
    if(true){
        setTimeout(()=>{
            reject(new Error('error'));
           },1000);
    }else{
       setTimeout(()=>{
        resolve(1)
       },2000);
    }
});
console.log('Before');
p.then(result =>{
    console.log(result);
}).catch(error => {
    console.log(error.message);
});
console.log('After');
