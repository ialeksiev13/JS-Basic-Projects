function calculateGladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    let brokenShieldCount = 0;
    for (let fight = 1; fight <= lostFights; fight++) {
        if (fight % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (fight % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (fight % 2 === 0 && fight % 3 === 0) {
            brokenShieldCount++
            totalExpenses += shieldPrice
            if (brokenShieldCount % 2 === 0) {
                totalExpenses += armorPrice
            }
        }
    }
    console.log(`Gladiator expenses: ${(totalExpenses).toFixed(2)} aureus`);
}
calculateGladiatorExpenses(7,2,3,4,5
)