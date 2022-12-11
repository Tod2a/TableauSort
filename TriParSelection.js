let array = [5, 3, 8, 1];
for (let i = 0; i < array.length; i++) {
    let min = array[i];
    for (let j = i; j < array.length; j++) {
        if (array[j] < min) {
            min = array[j];
        }
        array[array.indexOf(min)] = array[i];
        array[i] = min;
    }
}
console.log(array);