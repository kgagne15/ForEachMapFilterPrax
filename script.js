//forEach
const arrNum = [2, 3, 4, 5, 6];
const arrString = ['colt', 'matt', 'tim', 'test']
const arrObj = [
    {
        firstName: 'Alyssa',
        lastName: 'Gagne'
    },
    {
        firstName: 'Lexi',
        lastName: 'Menario'
    }
]
//1. doubleValues --> Write a function called doubleValues which accepts
//an array and returns a new array with all the values in the array
//passed to the function doubled

function doubleValues(arr) {
    const newArr = [];
    arr.forEach(function(char) {
        newArr.push(char * 2); 
    });
    return newArr;
};



//2. onlyEvenValues --> Write a function called onlyEvenValues which accepts an 
//array and returns a new array with only the even values in the array
//passed to the function

function onlyEvenValues(arr){
    const evenArr = [];
    arr.forEach(function(val) {
        if(val % 2 === 0) {
            return evenArr.push(val);
        }
    })
    return evenArr; 
};

//3. showFirstAndLast --> Write a function called showFirstAndLast which
//accepts an array of strings and returns a new array with only the first 
//and last character of each string

function showFirstAndLast(arr) {
    const stringArr = []; 
    let newString = '';
    arr.forEach(function(val){
        for (let i = 0; i < val.length; i++) {
            if(i === 0 || i === val.length-1) {
                newString += val[i];
            }
        }
        stringArr.push(newString);
        newString = '';
    })
    return stringArr; 
}

//4. addKeyAndValue --> Write a function called addKeyAndValue which accepts
//an array of objects, a key, and a value and returns the array passed to
//the function with the new key and value added for each object
//had to look at solution
function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
        val[key] = value; 
    });
    return arr; 
};

//5. vowelCount --> Write a function called vowelCount which accepts a
//string and returns an object with the keys as the vowel and the values
//as the number of times the vowel appears in the string. This function
//should be case insensitive so a lowercase letter and uppercase letter
//should count
//had to look at solution to get this using the forEach
function vowelCount(str) {
    let splitArr = str.split('');
    let vowels = 'aeiou';
    let newObj = {}; 
     
     
    splitArr.forEach(function(letter) {
        let lowCased = letter.toLowerCase();
        if (vowels.includes(letter)) {
            if(newObj[letter]) {
                newObj[letter]++; 
            } else {
                newObj[letter] = 1; 
            } 
        }
    })
    
    return newObj; 
}

//map
//6. doubleValuesWithMap --> Write a function called doubleValuesWithMap
//which accepts an array and returns a new array with all the values in 
//the array passed to th function doubled

function doubleValuesWithMap(arr) {
    const newArr = arr.map(function(val) {
        return val * 2; 
    })
    return newArr; 
}

//7. valTimesIndex --> Write a function called valTimesIndex which accepts
//an array and returns a new array with each value multiplied by the index
//it is currently at in the array

function valTimesIndex(arr) {
    const multArr = arr.map(function(val, idx){
        return val * idx;
    })
    return multArr; 
}

//8. extractKey --> write a function called extractKey which accepts an 
//array of objects and some key and returns a new array with the value of
//that key in each object

function extractKey(arr, key) {
    const keyArr = arr.map(function(val){
        for (let kee in val) {
            if (kee === key) {
                return val[kee];
            }
        }
    })
    return keyArr; 
}

//9. extractFullName --> Write a function called extractFullName which accepts
//an array of objects and returns a new array with the value of the key
//with a name of first and the value of a key with the name of last in each object,
//concatenated together with a space

function extractFullName(arr) {
    const nameArr = arr.map(function(val){
        let name = '';
        for (let key in val) {
            if (key === 'first') {
                name += val[key];
            }
            if (key === 'last') {
                name += ' ' + val[key];
            }
            
        }
        return name; 
    })
    return nameArr; 
}

//filter
//10. filterByValue --> write a function called filterByValue which accepts
//an array of objects and a key and returns a new array with all the objects
//that contain that key

function filterByValue(arr, key) {
    const filterValArr = arr.filter(function(val){
        for (let kee in val) {
            return val[key];
        }
    })
    return filterValArr; 
}

//11. find --> write a function called find which accepts an array and a value and returns the
//first element in the array that has the same value as the second parameter or undefined
//if the value is not in the array
//needed to look at solution
///LOOK AT THIS AGAIN, I DON'T UNDERSTAND THE [0]
function find(arr, search) {
    return arr.filter(function(val){
        return val === search;
    })[0];
}

//12. findInObj --> write a function called findInObj which accepts an array of objects, a 
//key, and some value to search for and returns the first found value in the array
//same as above
function findInObj(arr, key, value) {
    return arr.filter(function(val) {
        return val[key] === value; 
    })[0];
}

//13. removeVowels --> write a function called removeVowels which accepts a string and returns
//a new string with all of the vowels (both upper and lowercased) removed. Every character in
//the new string should be lowercased

function removeVowels(str) {
    strLowCased = str.toLowerCase(); 
    let splitArrTwo = strLowCased.split(''); 
    let vowels = 'aeiou'; 

    const removeArr = splitArrTwo.filter(function(val){
        if (!vowels.includes(val)) {
            return val; 
        }
    })
    return removeArr.join(''); 
}

//14. doubleOddNumbers --> write a function called doubleOddNumbers which accepts an array
//and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter
//to double and then filter the odd numbers); 
//had to look at solution

function doubleOddNumbers(arr) {
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val * 2; 
    })
}

