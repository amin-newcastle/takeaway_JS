'use strict';

describe('Dish', () => {
    let dish;
    
    beforeEach(() => {
        dish = new Dish("Onion Bhaji", 2.95);
    });

    describe("#constructor", () => {
        it('Should respond with dish object', () => {
            expect(dish).toEqual(jasmine.any(Dish));        
        });

        it('Should respond with dish name and number', () => {
            expect(dish).toEqual(jasmine.objectContaining({dishName: "Onion Bhaji", dishPrice: 2.95}));        
        });
    });


});