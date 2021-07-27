// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

  let doubleArrow =  arr => arr.map(val => val * 2);


//   function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

let arrowSquareandFindEvens = squares => squares.map(n => n ** 2).filter(e => e % 2 === 0);