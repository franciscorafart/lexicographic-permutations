
let array = [0,1,2,3,4,5,6,7,8,9];
console.log(permsToOrderedString(allPerms(array))[999999]);

//returns all the permutations from elements in an array
function allPerms(array){
  let initial = [[array[0]]];
  for (let index = 1; index< array.length; index++){
    let newArray = permutation(initial, array[index]);
    initial = newArray;
  }
  return initial;
}

//returns an array of arrays with 'element' inserted in all indexes
function permutation(arr, element){
  let res = []
  for (let i = 0; i<arr.length; i++){
    for(let j = arr[i].length; j>= 0; j--){
        let arrLocal = Array.from(arr[i]);
        arrLocal.splice(j,0,element);
        res.push(arrLocal);
    }
  }
  return res;
}

//function to order the arrays
function permsToOrderedString(arrayOfArrays){
  res = [];
    for (let i = 0; i< arrayOfArrays.length; i++){
      let s = '';
      for (let j=0; j<arrayOfArrays[i].length; j++){
        s += String(arrayOfArrays[i][j]);
      }
      res.push(s);
    }
    res.sort();
  return res;
}
