let array = [
  [1,2],
  [2,1]
]

let perm123 = permutation(array, 3)

let perm1234 = permutation(perm123,4)
console.log(perm1234)
//function that takes array and permutes



function permutation(arr, element){
  let res = []
  for (let i = 0; i<arr.length; i++){
    for(let j = 0; j<= arr[i].length; j++){
        let arrLocal = Array.from(arr[i]);
        arrLocal.splice(j,0,element);
        res.push(arrLocal);
    }
  }
  return res;
}

// let array1 = [1,2,3]
// let array2 = Array.from(array1)
// array2.push(4)
// console.log(array1)
// console.log(array2)
