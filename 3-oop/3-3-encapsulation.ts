{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7 // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('마이너스 값 사용하지마!')
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not Enough coffee beans!')
    }
   this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

   return {
      shots: shots,
      hasMilk:false,
   } 
  }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(40);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}` 
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if(num > 0) {
        
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {  
    }
  }

  const user = new User('Steve', 'Jobs');
  user.age = 6;
  console.log(user.fullName);
}