Here are the descriptions of the JS tasks:

1. Ages
Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
The input comes as a single number parameter. The bounders are:
·	0-2 (age) – is a baby;   
·	3-13 (age) – is a child; 
·	14-19 (age) – is a teenager;
·	20-65 (age) – is an adult;
·	>=66 (age) – is an elder; 
·	In all other cases print – "out of bounds";
The output should be printed to the console.
Examples
Input	Output
20	adult
1	baby
100	Elder
-1	out of bounds

2.Vacation
You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
The output should look like that: `Total price: {price}`. The price should be formatted to the second decimal point.
	Friday	Saturday	Sunday
Students	8.45	9.80	10.46
Business	10.90	15.60	16
Regular	15	20	22.50

There are also discounts based on some conditions:
·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
Note: You should reduce the prices in that EXACT order.

3. Echo
Write a JS function that takes one parameter and prints on two lines the type of the parameter and then one of the following:
•	If the parameter type is either string or number, print its value
•	Otherwise, print the text 'Parameter is not suitable for printing'

4.Town Info
You will be given 3 parameters. The first parameter will be the name of the town (string), the second – the population (number), and the third – the area (number). 
First, validate the input data – the town name must be at least 3 characters long, and the population and the area must be positive numbers. 
•	If the town name is too short, print the following message:
"Town name must be at least 3 characters!"
•	If the population or the area is a negative number, print the following message:
"{Population/Area} must be a positive number!"
•	If all the data is valid, print it in the following format:
"Town {town name} has population of {population} and area {area} square km."


