// You need to write regex that will validate a password to make sure it meets the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
  return  /^[A-Za-z0-9]{6,}$/.test(password) &&
          /[A-Z]+/           .test(password) &&
          /[a-z]+/           .test(password) &&
          /[0-9]+/           .test(password) ;
}

function validate(password) {
return /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/.test(password);
}
// (?=.*[a-z]) a lowercase letter
// (?=.*[A-Z]) a upper case letter
// (?=.*?[0-9]) a number
// [A-Za-z0-9] all alphanumeric
// {6,} min length 6
// $
