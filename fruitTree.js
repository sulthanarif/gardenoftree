class FruitTree {
  constructor(treeMatureAge, treeLimitAge, treeStopAge) {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._harvested = "";
    this._healthStatus = true;
    this._matureAge = treeMatureAge;
    this._limitAge = treeLimitAge;
    this._stopAge = treeStopAge;
  }
  // Getter

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get harvested() {
    return this._harvested;
  }

  get healthStatus() {
    return this._healthStatus;
  }

  get matureAge() {
    return this._matureAge;
  }

  get limitAge() {
    return this._limitAge;
  }

  get stopAge() {
    return this._stopAge;
  }

  // Grow
  grow() {
    // Declaration
    let addingHeight = 0;
    this.age++;    

    if (this.age < this.limitAge) {
      addingHeight = Math.round(Math.random()*100) / 100;
      this.height += addingHeight;
    };

    if (this.age >= this.stopAge) {
      this.healthStatus = false;
    };

    return this;
  }

  //   Produce some fruits
  produceFruits() {
    if(this.age >= this.matureAge){
      let fruitTotal = Math.round(Math.random()*100);
      for(let i = 1; i <= fruitTotal; i++){
        this.fruits.push(new Fruit(Math.random()));
      };
    };
  };

  // harvesting
  harvest() {}
};

class Fruit {
  constructor(num){
    this.quality = setQuality(num);
  };

  setQuality(num){
    
    if (Math.random() < num){
      this.quality = 'bad';
    } 

    if (Math.random() > num){
      this.quality = 'good';
    } 


    return this.quality;
  };
}