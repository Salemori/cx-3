// 1a. Create variables to store name, age, and nationality
let name = "Aduragbemi";
let age = 100;
let nationality = "Nigerian";

// 1b. Combine into a sentence
let introduction = `Hello, my name is ${name}, I am ${age} years old, and I am ${nationality}.`;
console.log(introduction);

// 2a. Favorite quote or lyric
let favoriteQuote = "Despise not the days of little beginning";

// 2b. Convert to uppercase
let upperQuote = favoriteQuote.toUpperCase();
console.log("My favorite Quote in uppercase: ", upperQuote);

// 2c. Convert to lowercase
let lowerQuote = favoriteQuote.toLowerCase();
console.log("My favorite Quote in lowercase: ", lowerQuote);

// 3. Reverse word
let word = "career-ex";
let reversedWord = word.split('').reverse().join('');
console.log("Reversed word:", reversedWord);

// 4a. Price of 3 items
let cap = 1500;
let shoe = 2500;
let vest = 1000;

// 4b. Total price of 3 items
let totalPrice = cap + shoe + vest;
console.log(`The total price of the items (cap, shoe and vest) is ₦${totalPrice}.`);

// 5a. Variables of 5 test scores
let mathematics = 85;
let english = 90;
let economics = 78;
let biology = 92;
let geography = 88;

// 5b. Average of 5 test scores
let averageScore = (mathematics + english + economics + biology + geography) / 5;
console.log(`The average test score is ${averageScore}.`);

// 6a. Array of favorite foods
let favoriteFoods = ["Pizza", "Jollof Rice", "Burger", "Ice Cream", "Fufu"];

// 6b. Display first and last favorite foods
console.log("First favorite food:", favoriteFoods[0]);
console.log("Last favorite food:", favoriteFoods[favoriteFoods.length - 1]);

// 7a. Add food items at the beginning and end
favoriteFoods.unshift("Shawarma"); 
favoriteFoods.push("Fried Rice");   

// 7b. Display the new list
console.log("Updated favorite foods:", favoriteFoods);

// 8. JSS-One array with 10 student names
let jssOne = ["Daniel", "Sophia", "Emmanuel", "Fatima", "David", "Esther", "Joshua", "Zainab", "Samuel", "Precious"];
console.log("JSS One Students:", jssOne);

// 9. JSS-Two array with 10 student names
let jssTwo = ["Ibrahim", "Deborah", "Tolu", "Chisom", "Femi", "Ada", "Kunle", "Blessing", "Abdullahi", "Peace"];
console.log("JSS Two Students:", jssTwo);

// 10. JSS-Three array with 10 student names
let jssThree = ["Mary", "John", "Kemi", "Chinedu", "Aisha", "Collins", "Ruth", "Victor", "Amara", "Paul"];
console.log("JSS Three Students:", jssThree);
