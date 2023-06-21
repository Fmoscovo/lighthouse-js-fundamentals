/*Secret Message
Using array methods, you will transform an array of strings into a secret message!

You should consult the Mozilla Developer Network (MDN) for reference on any method with which you are not familiar.*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to', 'Program');
secretMessage['easily']= 'right';
secretMessage.shift();
secretMessage.unshift('Programing');
secretMessage.splice(6, 5, 'know');
console.log(secretMessage.join(' '));