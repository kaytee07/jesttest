const analyzeArray = (arr) => {
    if(isArrayNum(arr)){
        return "array must contain only numbers"
    } 
    return{
        max : Math.max(...arr),
        min : Math.min(...arr),
        length : arr.length,
        average : Math.floor(arr.reduce((prev, curr)=> prev + curr,0)/ arr.length)
    }
              
}
const isArrayNum = (arr) => {
    let true_false = []
    for(let num of arr){
       true_false.push((typeof num === "number"))
    }
   let isFalse = arr.filter(num => {
        return typeof num !== 'number' 
    })
    return isFalse.length > 0
}

    module.exports = analyzeArray;
