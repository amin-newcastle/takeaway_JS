'use strict';

class Menu {
    constructor() {
        this._mainMenu = []
    };

    addDish = (dishName, dishPrice) => {
        let dish = new Dish(dishName, dishPrice)
        this._mainMenu.push(JSON.stringify(dish));
    };    
};