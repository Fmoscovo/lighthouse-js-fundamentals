const urlEncode = function(text) {
  let trimText = text.trim();
  let urlString = trimText.split(" ").join("%20");
  return urlString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


/*Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

Warning
Use some sort of looping. Do Not use String.prototype.replace*/