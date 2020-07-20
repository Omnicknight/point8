const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};

const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: { 
        material: 'metal',
        ingridients: {},
    },
    addIngridientToKettle(nameOfIngridient, amount) {
        kitchen.kettle.ingridients[nameOfIngridient] = amount;
        kitchen[nameOfIngridient] = kitchen[nameOfIngridient] - amount;
    },
    cook(recipe) {
        let res = 0;
        let rec = magicBook.recipes[recipe];
        for (const key in rec) {
            if (rec.hasOwnProperty(key)) {
                if(rec[key] !== kitchen.kettle.ingridients[key]) res++;
            }; 
        };
    if(res === 0) {
        console.log(recipe);
    } else {
        console.log('Неправильное количество ингридиентов');
    };  
    },
};

kitchen.addIngridientToKettle('bone', 10);
kitchen.addIngridientToKettle('stone', 100);
kitchen.addIngridientToKettle('nail', 100);
kitchen.addIngridientToKettle('poo', 53);
kitchen.cook('golem');

