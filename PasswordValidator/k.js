const arr =[2,3,6,5,4,5,7,8,1,3];

// console.log(arr.sort());


    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp;
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
        console.log(arr[j])
}