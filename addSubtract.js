function modifyArray(arr) {
    let originalSum = 0;
    let modifiedSum = 0;
    const modifiedArray = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        originalSum += num;

        let modifiedValue;
        if (num % 2 === 0) {

            modifiedValue = num + i;
        } else {
            modifiedValue = num - i;
        }

        modifiedArray.push(modifiedValue);
        modifiedSum += modifiedValue;
    }
    console.log(modifiedArray);
    console.log(originalSum);
    console.log(modifiedSum);
}
modifyArray([5, 15, 23, 56, 35])