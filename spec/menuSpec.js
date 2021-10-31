'use strict';

describe('Menu', () => {
    let myMenu;

    beforeEach(() => {
        myMenu = new Menu();
    });

    describe("#constructor", () => {
        it('Should respond with menu object', () => {
            expect(myMenu).toEqual(jasmine.any(Menu));        
        });
    });

    describe("#addDish", () => {
        it('Should add a dish object to the menu array', () => {
            myMenu.addDish("Onion Bhaji", 2.95);
            expect(myMenu.mainMenu).toEqual(jasmine.objectContaining(myMenu.dish));        
        });
    });
});