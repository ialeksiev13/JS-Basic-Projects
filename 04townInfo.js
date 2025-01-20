function townInfo(townName, townPopulation, townArea) {
    if(townName.length >= 3 && townPopulation >= 0 && townArea >= 0){
        console.log(`Town ${townName} has population of ${townPopulation} and area ${townArea} square km.`);
        return;
    }
    if (townName.length < 3) {
        console.log(`Town name must be at least 3 characters!`);
    }
    if (townPopulation < 0) {
        console.log(`Population must be a positive number!`);
    }
    if (townArea < 0) {
        console.log(`Area must be a positive number!`);
    }
}
townInfo('Sofia',
1286383,
492
)
//You will be given 3 parameters. The first parameter will be the name of the town (string), the second – the population (number), and the third – the area (number).
//First, validate the input data – the town name must be at least 3 characters long, and the population and the area must be positive numbers.
//•	If the town name is too short, print the following message:
//"Town name must be at least 3 characters!"
//•	If the population or the area is a negative number, print the following message:
//"{Population/Area} must be a positive number!"
//•	If all the data is valid, print it in the following format:
//Town {town name} has population of {population} and area {area} square km."
