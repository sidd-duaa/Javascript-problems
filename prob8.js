// 8. Question: Sort the array in ascending and descending without built-in methods.

const arr = [7, 4, 10, 8, 3, 1];
for(let i=0; i<arr.length-1; i++){
    let min = i;
    for(let j=i+1; j<arr.length; j++){
        if(arr[j] < arr[min]){
            min = j;
        }
    }
    if(min != i){
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }   
}
console.log(arr);


for (let i = 0; i < arr.length - 1; i++) {
    let max = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[max]) {
            max = j;
        }
    }
    if (max !== i) {
        let temp = arr[i];
        arr[i] = arr[max];
        arr[max] = temp;
    }
}
console.log(arr);
