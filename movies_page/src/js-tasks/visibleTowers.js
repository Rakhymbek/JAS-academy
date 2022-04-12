function visibleTowers(arr) {
    const newArr = [];
    const firstTower = arr[0];

    
    for(let i = 0; i < arr.length; i++) {
        if(firstTower < arr[i + 1] && !newArr.includes(arr[i + 1])) {
            if(newArr[newArr.length - 1] > arr[i + 1]) continue;
            newArr.push(arr[i + 1]);
        }
    }

    return newArr.length;
}

console.log(visibleTowers([1,2,9,8,7,6,5,4,3,2]));