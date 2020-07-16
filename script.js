const magicBook = {
    boomSpell: 'Asda masasda',
    soupSpell: 'Dase feads',
};

const kettle = {
    material: 'metal',
    result : null,
    ingridients: {
        ingridient1: 'nails',
        ingridient2: 'bat heads',
    },
    shuffle() {
        console.log('Shuffling..');
    },
    addToIngridients(key, value) {
        console.log('Adding...', key, value);
        this.ingridients[key] = value;
        this.shuffle();
    },
};

kettle.spellTheCast = function() {
    console.log(this.material);
    this.shuffle();
};

// kettle.addToIngridients('ing3', 'teeth');
// kettle.addToIngridients('ing4', 'banana');
// kettle.addToIngridients('ing5', 'poo');

// const pick = (obj, key) => {
//     return obj[key];
// }

const cat = {
    material: 'abc',
    spellTheCast () {
        const self = this;
        const fnc = function () {
            return self.material;
        };
        alert(fnc());
    },
};

kettle.spellTheCast();

 
