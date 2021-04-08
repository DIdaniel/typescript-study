{
    var BEANS_GRAMM_PER_SHOT_1 = 7;
    var coffeeBeans_1 = 0;
    function makeCoffee(shots) {
        if (coffeeBeans_1 < shots * BEANS_GRAMM_PER_SHOT_1) {
            throw new Error('Not Enough coffee beans!');
        }
        coffeeBeans_1 -= shots * BEANS_GRAMM_PER_SHOT_1;
        return {
            shots: shots,
            hasMilk: false
        };
    }
    var coffee = makeCoffee(2);
    console.log(coffee);
}
