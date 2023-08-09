function cubeNumber(number) {
    const cubeOfNumber = Math.pow(number, 3);
    if(typeof number !== 'number') {
        const errorMessage = "Sorry, this isn't a valid number. Please enter a valid number.";
        return errorMessage;
    }
    return cubeOfNumber
}

const cube = cubeNumber(7);
console.log(cube)

function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Invalid String.'
    } 
    else {
        if(string1.match(string2)) {
            return true;
        } 
        else {
            return false;
        }
    }
}

const result1 = matchFinder('I have to learn the concept', {name:'lep'});
console.log(result)

function sortMaker(arr) {
    const first = arr[0];
    const second = arr[1];
    if(first < 0 || second < 0) {
        const errorMessage = "Invalid Input";
        return errorMessage
    }
    else if(first < second) {
        const newArray = [second, first];
        return newArray
    } 
    else if (first === second) {
        return 'Equal';
    } 
    else {
        return arr
    } 
}

const array = [7,5];
const result2 = sortMaker(array);
console.log(result)

function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    const address = street + ',' + house + ',' + society;
    return address;

}
const address = {street:10,house:'15A'}
const result3 = findAddress(address);
console.log(result)

function canPay(changeArray, totalDue) {
    let totalAmount = 0;
    for(let i = 0; i < changeArray.length; i++) {
        const amount = changeArray[i];
        totalAmount += amount;
    }
    if(changeArray.length === 0) {
        return 'Invalid Input.'
    } 
    else if(totalAmount >= totalDue) {
        return true
    } 
    else {
        return false;
    }
}

const arr = [];
const price = 10;
const result4 = canPay(arr, price);
console.log(result);