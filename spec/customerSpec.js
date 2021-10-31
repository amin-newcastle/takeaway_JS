'use strict';

describe('Customer', () => {
    let myCustomer;
    
    beforeEach(() => {
        myCustomer = new Customer('amin', '07999985111');
    });

    describe("#constructor", () => {
        it('Should respond with customer object', () => {
            expect(myCustomer).toEqual(jasmine.any(Customer));        
        });

        it('Should respond with customer name and number', () => {
            expect(myCustomer).toEqual(jasmine.objectContaining({customerName: "amin", mobileNumber: "07999985111"}));        
        });
    });


});