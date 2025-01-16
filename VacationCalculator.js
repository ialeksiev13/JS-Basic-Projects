function vacation(groupNumber, groupType, groupDay) {
    let price = 0;
    switch (groupDay) {
        case "Friday":
            if (groupType === "Students") {
                price += 8.45
            } else if (groupType === "Business") {
                price += 10.90
            } else if (groupType === "Regular") {
                price += 15
            }
            break;
        case "Saturday":
            if (groupType === "Students") {
                price += 9.80
            } else if (groupType === "Business") {
                price += 15.60
            } else if (groupType === "Regular") {
                price += 20
            }
            break;
        case "Sunday":
            if (groupType === "Students") {
                price += 10.46
            } else if (groupType === "Business") {
                price += 16
            } else if (groupType === "Regular") {
                price += 22.50
            }
            break;
    }
    let finalPrice = price * groupNumber
    if (groupType === "Students" && groupNumber >= 30) {
        finalPrice *= 0.85
    } else if (groupType === "Business" && groupNumber >= 100) {
        finalPrice *= 0.9
    } else if (groupType === "Regular" && groupNumber >= 10 && groupNumber <= 20) {
        finalPrice *= 0.95
    }
    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
)