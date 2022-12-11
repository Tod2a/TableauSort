let array = [5, 3, 8, 1];
for (let i = 1; i < array.length; i++) {
    let j=i
    while(array[j]<array[j-1] || j==1){
        let temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
        j--;
    }
}
console.log(array)