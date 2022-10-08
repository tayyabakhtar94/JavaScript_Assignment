// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// For Uppercase
var Name = "Tayyab Akhtar";
var temp = Name.toUpperCase();
console.log(temp);

//For Lowercase
temp = Name.toLowerCase();
console.log(temp);

//For Titlecase
function titleCase(temp1) {
    return temp1.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  var r = titleCase("JavaScript is very Interactive");
  console.log(r);