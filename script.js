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
    addToIngridients(one, two) {
        this.ingridients[one] = two;
    },
};

kettle.spellTheCast = function() {
    console.log(this.material);
    this.shuffle()
};

kettle.spellTheCast();
kettle.addToIngridients('ing3', 'teeth');
console.log(kettle.ingridients.ing3);

