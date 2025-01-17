function echo(input) {
    console.log(typeof input); // Print the type of the parameter
    if (typeof input === 'string') {
        console.log(input); // Print the value if it's a string or number
    } else if (typeof input === 'number') {
        console.log(input);
    }
    else {
        console.log('Parameter is not suitable for printing'); // For other types
    }
}
echo(`object`)