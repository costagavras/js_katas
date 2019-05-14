// In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.

function filter_list(list) {
  var filteredNumbers = list.filter(function(item) {
    return typeof item === "number";
  })
  console.log(filteredNumbers);
  // return filteredNumbers;
}

filter_list([1,2,'aasf','5','123',456]);
