//  forEach() Loops >>>   How to use the currentElement Argument

const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

  staffsDetails.forEach((staffDetail) => {
    let sentence = `I am ${staffDetail.name} a staff of Royal Suites.`;
    console.log(sentence);
  });

  /*  Output:
     "I am Jam Josh a staff of Royal Suites."
     "I am Justina Kap a staff of Royal Suites."
     "I am Chris Colt a staff of Royal Suites."
     "I am Jane Doe a staff of Royal Suites." */


     
     // forEach Loops >>>  How to use the index Argument

  staffsDetails.forEach((staffDetail, index) => {
     let sentence = `index ${index} : I am ${staffDetail.name} a staff of Royal Suites.`;
     console.log(sentence);
     });

      /* "index 0 : I am Jam Josh a staff of Royal Suites."
         "index 1 : I am Justina Kap a staff of Royal Suites."
         "index 2 : I am Chris Colt a staff of Royal Suites."
         "index 3 : I am Jane Doe a staff of Royal Suites."  */

         // How to Add All Values in An Array of Numbers with forEach()
         const scores = [12, 55, 70, 47];

         let total = 0;
         scores.forEach((score) => {
           total += score;
         });
         
         console.log(total);  // 184

         // How to Use Conditionals in a forEach() Callback Function

         staffsDetails.forEach(({name, salary}) => {
            if(salary >= 4000){
              console.log(name);
            }
          }); // "Jam Josh"  "Jane Doe"
          

 