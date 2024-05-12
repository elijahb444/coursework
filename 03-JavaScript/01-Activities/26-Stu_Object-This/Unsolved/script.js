// TODO: What does 'this' refer to?
// this 'this' refers is scoped globally, so it refers to the entire window
console.log(this);

// TODO: What does 'this' refer to?
// this 'this' is NOT within an object, so it is also scoped globally. It will be object window
function helloThis() {
   console.log(`Inside this function, this is ${this}`);
}

// TODO: What will this log?
// this 'this' is within an object, so it is scoped to the object. It will log 20
const child = {
   age: 10,
   ageTenYears: function() {
      console.log(this.age + 10);
   }
};

// TODO: What will this log?
// 5750
const investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
