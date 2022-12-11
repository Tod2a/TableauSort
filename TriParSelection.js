let array = [5, 3, 8, 1];
for (let i = 0; i < array.length; i++) {
    let min = array[i];
    for (let j = i; j < array.length; j++) {
        if (array[j] < min) {
            min = array[j];
        }
        array.splice(array.indexOf(min), 1);
        array.splice(array[i], 0, min);
    }    
}
console.log(array);