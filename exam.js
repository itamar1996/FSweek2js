
let Mission1 = (numarr) => {
  let evennumsarr = numarr.filter((num) => num % 2 == 0);
  return evennumsarr;
};

let Mission2 = (str) => {
  let wordsarr = str.split(" ");
  let count = 0;
  for (let i = 0; i < wordsarr.length; i++) {
    if (wordsarr[i].length == 4) {
      count++;
    }
  }
  return count;
};

let ar1 =["name", "age","city"]
let ar2 = ["Ariel",22, "Gan Yavne" ]
let Mission5 = (keysarr, valuesarr) => {
  let obj = new Object();
  let smallarrlen = 0;
  if(keysarr.length > valuesarr.length)
  {
    smallarrlen = valuesarr.length;
  }
  else if(valuesarr.length>keysarr.length)
  {
    smallarrlen = keysarr.length;
  }
  else{
    smallarrlen = keysarr.length;
  }
  for (let i = 0; i < smallarrlen; i++) {
    obj[keysarr[i]] = valuesarr[i];
  }

  return obj;
};

let Comparingarr = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
};

let Mission4 = (arr) => {
    let sortarr = [...arr].sort((a, b) => a - b);
    let reversesortarr = [...arr].sort((a, b) => b - a);
    
    if (Comparingarr(arr, sortarr)) {
        return 1;
    } else if (Comparingarr(arr, reversesortarr)) {
        return 2;
    } else {
        return 0;
    }
};


module.exports ={
    Mission1,
    Mission2,
    Mission4,
    Mission5
}

