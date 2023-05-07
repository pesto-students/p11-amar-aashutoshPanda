function isStrongPassword(password) {
  // Check if password is at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Check if password contains "password" string
  if (password.toLowerCase().includes("password")) {
    return false;
  }

  // Check if password contains at least one uppercase character
  if (password.toLowerCase() === password) {
    return false;
  }

  // If all conditions pass, return true
  return true;
}

console.log(isStrongPassword("Qwerty")); // false - Too short
console.log(isStrongPassword("passwordQwerty")); // false - Contains "password"
console.log(isStrongPassword("qwerty123")); // false - No uppercase characters
console.log(isStrongPassword("Qwerty123")); // true
