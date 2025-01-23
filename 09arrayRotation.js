function arrayRotation(input, rotation) {
    for (i = 0; i < rotation; i++) {
        let firstElement = input.shift();
        input.push(firstElement);
    }
    console.log(`${input.join(' ')}`);
}
arrayRotation([51, 47, 32, 61, 21], 2)
