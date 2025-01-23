function mergearrays(arr1, arr2) {
    let mergedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            let sum = parseFloat(arr1[i]) + parseFloat(arr2[i]);
            mergedArray.push(sum);
        } else {
            let concatenation = arr1[i] + arr2[i];
            mergedArray.push(concatenation);
        }
    }
    console.log(`${mergedArray.join(" - ")}`);
}
mergearrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
)
