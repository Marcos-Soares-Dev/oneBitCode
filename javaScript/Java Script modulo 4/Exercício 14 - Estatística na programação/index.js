const mediaAritimetica = (...numbers)=>{
    const sum = numbers.reduce((prev, curr)=> prev + curr,0)
    return sum / numbers.length  
}

console.log(mediaAritimetica(2,2,2,2,2,2,2));
