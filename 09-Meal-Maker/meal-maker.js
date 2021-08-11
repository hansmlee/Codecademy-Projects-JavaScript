const menu = {
  _courses : {
    get courses() {
      return {
        appetizers : this.appetizers,
        mains : this.mains,
        desserts : this.desserts
      }
    },
    appetizers : ['Caprese Garlic Bread','Oven Baked Zucchini Chips','Spinach Artichoke Bites'],
    get appetizers(){},
    set appetizers(appetizersIn){},
    mains : ['Steack','Spaghetti','Pizza'],
    get mains(){},
    set mains(mainsIn){},
    desserts : ['Cake','Brownie','Cannoli'],
    get desserts(){},
    set desserts(dessertsIn){},
    addDishToCourse(courseName,dishName, 
    dishPrice){
      const dish = {
        name : dishName,
        price : dishPrice
      };
    this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const index = Math.floor(Math.random()
      *dishes.length);
      return dishes[index];
    },
    generateRandomMeal(){
      const appetizer = getRandomDishFromCourse(appetizer);
      const main = getRandomDishFromCourse(main);
      const dessert = getRandomDishFromCourse(dessert);
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`;
    
    }

  }
  };

  let meal = menu.generateRandomMeal;
  console.log(meal);
