"use strict";
// Assignment 2 //
Object.defineProperty(exports, "__esModule", { value: true });
let Name = "Emma";
console.log(`hey ${Name}!! nice to meet you!`);
// Assignment 3 //
let yourname = "Hamza ali";
//lowercase //
console.log(yourname.toLowerCase());
// UPPERCASE
console.log(yourname.toUpperCase());
//titlecase //
function titleCase(string) {
    return string.toLowerCase().split(" ").map((word) => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(" ");
}
console.log(titleCase("hamza ali"));
// Assignment 4 //
console.log("you can have it all,you just cant have it all at once.\n\t\t\t\t\t\t~Oprah Winfrey");
// Assignment 5 //
let FamousPerson = "Oprah Winfrey";
let message = `you can have it all,you just cant have it all at once.\n\t\t\t\t\t\t ~${FamousPerson}`;
console.log(message);
// Assignment 6 //
let name = "\n\tEmma stone\n";
console.log(name);
console.log(name.trim());
// Assignment 7 and 8 //
console.log(`the sum is: ${4 + 4}`);
console.log(`the difference is: ${12 - 4}`);
console.log(`the product is: ${4 * 2}`);
console.log(`the quotient is: ${16 / 2}`);
// Assignment 9 //
let favouriteNumber = 100;
console.log(`my favourite number is: ${favouriteNumber}`);
// Assignment 10 //
// Name:IQRA
// Date: 29/3/2024
//performing arithematical operations
console.log(`the sum is: ${4 + 4}`);
console.log(`the difference is: ${12 - 4}`);
console.log(`the product is: ${4 * 2}`);
console.log(`the quotient is: ${16 / 2}`);
// my favourite quote
let FamousPerson = "Oprah Winfrey";
let Message = `you can have it all,you just cant have it all at once.\n\t\t\t\t\t\t ~${FamousPerson}`;
console.log(Message);
// Assignment 11
let namearray = ["Emma", "wilson", "george", "watson"];
console.log(namearray[0]);
console.log(namearray[1]);
console.log(namearray[2]);
console.log(namearray[3]);
console.log(namearray);
// Assignment 12 //
let namearray = ["Emma", "wilson", "george", "watson"];
console.log(`hello! ${namearray[0]},what are you up to?`);
console.log(`hello! ${namearray[1]},what are you up to?`);
console.log(`hello! ${namearray[2]},what are you up to?`);
console.log(`hello! ${namearray[3]},what are you up to?`);
// Assignment 13 //
let transport = ["rickshaw", "bike", "motorcycle", "car", "jeep"];
const Transport = (items) => {
    return "i dream to own a " + items;
};
let dreamtransport = transport.map(Transport);
console.log(dreamtransport);
// Assignment 14//
let peopleinvited = ["Emma", "John", "Watson", "Micheal", "Rin"];
const PeopleInvited = (item) => {
    return `${item},join me for dinner tonight;)\n`;
};
let Guests = peopleinvited.map(PeopleInvited);
console.log(Guests.join(""));
// Assignment 15 //
let peopleinvited = ["Emma", "John", "Watson", "Micheal", "Rin"];
console.log(`\nunfortunately ${peopleinvited[0]} will not be able to join us for dinner tonight\n`);
peopleinvited.splice(0, 1, "Tina");
const PeopleInvited = (item) => {
    return `${item},join me for dinner tonight;)\n`;
};
let Guests = peopleinvited.map(PeopleInvited);
console.log(Guests.join(""));
// Assignment 16 //
let peopleinvited = ["Tina", "John", "Watson", "Micheal", "Rin"];
console.log("Hallo everyone! i have found a bigger Dinner table,this means i can invite 3 more people!\n");
peopleinvited.unshift("lizzy");
peopleinvited.splice(3, 0, "Anna");
peopleinvited.push("lana");
console.log(peopleinvited);
const PeopleInvited = (item) => {
    return `${item},join me for dinner tonight;)\n`;
};
let Guests = peopleinvited.map(PeopleInvited);
console.log(Guests.join(""));
// Assignment 17 //
let peopleinvite = ["lizzy", "Tina", "John", "Watson", "Anna", "Micheal", "Rin", "Lana"];
console.log(`Sorry ${peopleinvite[7]} I wont be able to invite you due to inavailability of table.`);
peopleinvite.pop();
console.log(`Sorry ${peopleinvite[6]} I wont be able to invite you due to inavailability of table.`);
peopleinvite.pop();
console.log(`Sorry ${peopleinvite[5]} I wont be able to invite you due to inavailability of table.`);
peopleinvite.pop();
console.log(`Sorry ${peopleinvite[4]} I wont be able to invite you due to inavailability of table.`);
peopleinvite.pop();
console.log(`Sorry ${peopleinvite[3]} I wont be able to invite you due to inavailability of table.`);
peopleinvite.pop();
console.log(`Sorry ${peopleinvite[2]} I wont be able to invite you due to inavailability of table.`);
peopleinvite.pop();
console.log(`you are still invited ${peopleinvite[1]} and ${peopleinvite[0]}`);
peopleinvite.splice(0, 2);
console.log("empty list", peopleinvite);
// Assignment 18 //
// let favouriteplaces = ["Switzerland","Makkah","Medina","Tokyo","Istanbul"];
console.log(favouriteplaces);
// Alphabetical order //
console.log("Alphabetical order", favouriteplaces.toSorted());
// original order //
console.log(favouriteplaces);
// Reverse Alphabetical order //
console.log("Reverse alphabetical order", favouriteplaces.toSorted().toReversed());
// original array order //
console.log(favouriteplaces);
// /////////////////prefered way/////////////////////////////
console.log(`Alaphabetical order: ${[...favouriteplaces].sort()}`);
console.log(`Reverse Alaphabetical order: ${[...favouriteplaces].sort().reverse()}`);
// //////////////////////////////////////////////////////////
// Again changing the orginal array's order to reverse order /
console.log(favouriteplaces.reverse());
// again revrsing the array //
console.log(favouriteplaces.reverse());
// Sort to alphabetical order //
console.log(favouriteplaces.sort());
// sort to reverse aplahabetical order //
console.log(favouriteplaces.sort().reverse());
// Assignment 19 //
let Guests = ["Lizzy", "Tina"];
console.log(`only ${Guests.length} people are comming to the dinner `);
// Assignment 20 //
let array = ["Mount Everest", "mount fuji", "k2", "mount elbrus", "Table Mountain"];
console.log("This is a list ot mountains\n");
let count = 0;
array.forEach((val, idx) => {
    count++;
    console.log(`${count}) ${val.toUpperCase()}`);
});
// Assignment 21 //
const biodata = {
    name: "Iqra Ghaffar",
    age: 17,
    gender: "female",
    grade: 12,
    result: "passed"
};
console.log(biodata);
const biodata1 = {
    name: "Wasay Alam",
    age: 17,
    gender: "boy",
    grade: 12,
    result: "failed",
};
console.log(biodata1);
// Assignment 22 //
let errorArray = ["A", "B", "C", "D"];
// producing an error //
console.log(errorArray[10]);
// Assignment 23 //
// TRUE CONDITIONS //
let Weight = 45;
console.log("is Weight == 45 ? i predict true");
console.log(Weight === 45);
let age = 18;
console.log("is age>= 18 ? i predict true");
console.log(age === 18);
let theme = "dark";
console.log("is theme === 'dark' ? i predict true");
console.log(theme === 'dark');
let weight = 56.8;
console.log("is weight != 57 ? i predict true");
console.log(weight != 57);
let marks = 97;
console.log("are marks === 97 ? i predict true");
console.log(marks === 97);
// FALSE CONDITIONS //
let answer = "true";
console.log("is answer === false ? i predict false");
console.log(answer === false);
let markss = 75;
console.log("Are markss === '75' ? i predict false");
console.log(markss === "75");
let color = "magenta";
console.log("is color === Red ? i predict false");
console.log(color === "Red");
let people = 400;
console.log("are people === 401 ? i predict false");
console.log(people === 401);
let Ages = 18;
console.log("Are Ages <= 17 ? i predict false");
console.log(Ages <= 17);
// Assignment 24 //
// Test for equality and inequality with strings //
let apple = "apple";
console.log("Is apple equal to apple?");
console.log(apple == "apple");
console.log("is apple not equal to apple?");
console.log(apple != "apple");
// test using the Lower case function //
let uppercaseapple = "APPLE";
console.log("is APPL equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() == "apple");
console.log("\n Is APPLE not equal to apple after converting to Lowercase");
console.log(uppercaseapple.toLowerCase() != "apple");
// Numerical tests //
let ten = 10;
let twenty = 20;
console.log("\n Is ten equal to twenty?");
console.log(ten == twenty);
// Not equal to
console.log("\n Is ten not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\nIs ten greater than zero?");
console.log(10 > 0);
// // Less than 
console.log("\nIs twenty less than 10");
console.log(twenty < 10);
// Greater than or equal to
console.log("\nIs ten greater than equal to 5?");
console.log(ten >= 5);
// //Less than or equal to
console.log("\nIs twenty less than or equal to 10");
console.log(twenty <= 10);
// Tests using "and" & "or" operators
let ten = 10;
let twenty = 20;
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 === 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//Test wheter an item is included in an array
let fruits = ["apple", "orange", "banana"];
console.log("Is orange included in my fruits array");
console.log(fruits.includes("orange"));
//Test wheter an item is not included in an array
console.log("Is kiwi included in my fruits array");
console.log(fruits.includes("kiwi"));
// Assignment 25 //
let alien_color = "Green";
if (alien_color === "Green") {
    console.log("you have earned 5 points");
}
;
if (alien_color !== "Green") {
    console.log("no output");
}
// Assignment 26 //
// running if block //
let aliencolor = "green";
if (aliencolor === "green") {
    console.log("you have earned 5 points for shooting the alien");
}
else {
    console.log("you have earned 10 points");
}
// running else block //
if (aliencolor === "blue") {
    console.log("the alien isnt blue");
}
else {
    console.log("alien");
    // }
    // Assignment 27 //
    // Version 1 //
    let alien = "Green";
    if (alien === "Green") {
        console.log("Version 1: player has earned 5 points");
    }
    else if (alien === "yellow") {
        console.log("player has earned 10 points");
    }
    else if (alien === "red") {
        console.log("player has earned 15 points");
    }
    // VERSION 2 //
    let Alien = "yellow";
    if (Alien === "Green") {
        console.log("player has earned 5 points");
    }
    else if (Alien === "yellow") {
        console.log("Version 2: player has earned 10 points");
    }
    else if (Alien === "red") {
        console.log("player has earned 15 points");
    }
    // // VERSION 3 //
    let AlienColor = "red";
    if (AlienColor === "Green") {
        console.log("player has earned 5 points");
    }
    else if (AlienColor === "yellow") {
        console.log("player has earned 10 points");
    }
    else if (AlienColor === "red") {
        console.log("Version 3: player has earned 15 points");
    }
    // Assignment 28 //
    let Ageofperson = 15;
    if (Ageofperson < 2) {
        console.log("this person is a baby");
    }
    else if (Ageofperson >= 2 && Ageofperson <= 4) {
        console.log("this person is a toddler");
    }
    else if (Ageofperson >= 4 && Ageofperson <= 13) {
        console.log("this person is a kid");
    }
    else if (Ageofperson >= 13 && Ageofperson <= 20) {
        console.log("this person is a teenager");
    }
    else if (Ageofperson >= 20 && Ageofperson <= 65) {
        console.log("this person is an adult");
    }
    else if (Ageofperson >= 65 && Ageofperson) {
        console.log("this person is an elder");
    }
    // Assignment 29 //
    let favourite_fruit = ["Apple", "kiwi", "dragonfruit"];
    if (favourite_fruit.includes("Apple")) {
        console.log("my favourite is an apple");
    }
    if (favourite_fruit.includes("orange")) {
        console.log("my favourrite fruit is orange");
    }
    if (favourite_fruit.includes("dragonfruit")) {
        console.log("my favourrite fruit is dragonfruit");
    }
    if (favourite_fruit.includes("banana")) {
        console.log("my favourrite fruit is banana");
    }
    if (favourite_fruit.includes("kiwi")) {
        console.log("my favourrite fruit is kiwi");
    }
    // Assignment 30 //
    let usernames = ["Eric123", "Iqra420", "Admin", "Joshua383", "Ethan10", "marlo666"];
    usernames.forEach(value => {
        if (value === "Admin") {
            console.log(`Hello ${value},would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${value},thanks for logging in again!!`);
        }
    });
    //Assignment 31 //
    let userNames = ["Eric123", "Iqra420", "Admin", "Joshua383", "Ethan10", "marlo666"];
    userNames.splice(0, 6);
    userNames = [];
    if (userNames.length === 0) {
        console.log("we need to find some users");
    }
    else {
        userNames.forEach(value => {
            if (value === "Admin") {
                console.log(`Hello ${value},would you like to see a status report?`);
            }
            else {
                console.log(`Hello ${value},thanks for logging in again!!`);
            }
        });
    }
    // Assignment 32 //
    let current_users = ["iqra80", "hamza100", "aliahmed8", "xXiqrzXx", "stzeirauwu"];
    let new_users = ["alihamza10", "kashaf9000", "hamza100", "aliahmed8", "kasim69"];
    new_users.forEach(new_user_val => {
        let our_condition = current_users.some(current_users_val => current_users_val.toLowerCase() === new_user_val.toLowerCase());
        if (our_condition) {
            console.log(`Sorry ${new_user_val} is already taken!`);
        }
        else {
            console.log(`this username ${new_user_val} is available!`);
        }
    });
    // Assignment 33 //
    let numberz = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // using loop //
    for (let num of numberz) {
        let ordinalEnding;
        if (num === 1) {
            ordinalEnding = "st";
        }
        else if (num === 2) {
            ordinalEnding = "nd";
        }
        else if (num === 3) {
            ordinalEnding = "rd";
        }
        else {
            ordinalEnding = "th";
        }
        console.log(`${num}${ordinalEnding}`);
    }
    // Assignment 34 //
    let pizzas = ["BBQ", "fajita", "Margherita"];
    for (let idx = 0; idx < pizzas.length; idx++) {
        console.log(`i really love eating ${pizzas[idx]} pizza`);
    }
    console.log("\ni really love eating all types of pizzas!!\n");
    // Another way of doing this assignment //
    for (let pizzatypes of pizzas) {
        console.log(`i really love eating ${pizzatypes} pizza`);
    }
    console.log(`\ni really love eating all types of pizzas!!`);
    // Assignment 35 //
    let animals = ["Cat", "cannary", "pony"];
    for (let petanimals of animals) {
        console.log(`a ${petanimals} is a great option for a pet.`);
    }
    console.log("\nall these animals are really cute and calm,they would make a great pet!!");
    // Assignment 36 //
    function make_shirt(size, message) {
        console.log(`You selected ${size} size shirt with a message ${message} printed`);
    }
    make_shirt("small", "Live,Laugh,Love");
    // Assignment 37 //
    function make_shirt(size = "Large", message = "i love Typescript :)") {
        console.log(`creating a ${size} size shirt with a message ${message} printed`);
    }
    // Calling a function with default values //
    make_shirt();
    // Calling a function with medium size and default message //
    make_shirt("medium");
    // Calling a function with small size and default message //
    make_shirt("small", "i love python <3");
    // Assignment 38 //
    function describe_city(city, country = "Pakistan") {
        console.log(`The city of ${city} is located in ${country}`);
    }
    describe_city("karachi");
    describe_city("Lahore");
    describe_city("Islamabad");
    // Assigment 39 //
    function city_country(city, country) {
        return `"${city},${country}"`;
    }
    console.log(city_country("Sydney", "Australia"));
    console.log(city_country("Berlin", "Germany"));
    console.log(city_country("bangkok", "Thailand"));
    // Assignment 40 //
    function make_album(Artist_Name, Albulm_Title, Tracks) {
        let Album = {
            Artist: Artist_Name,
            Title: Albulm_Title,
        };
        if (Tracks !== undefined) {
            Album.Track = Tracks;
        }
        return Album;
    }
    let album1 = make_album("Lana Del Rey", "honeymoon");
    console.log(album1);
    let album2 = make_album("Lana Del Rey", "born to die", 12);
    console.log(album2);
    let album3 = make_album("Lana Del Rey", "ultraviolence", 11);
    console.log(album3);
    // Assignment 41 //
    function show_magicians(magicians) {
        magicians.forEach(name => console.log(name));
    }
    let magicians_name = ["bobby", "philip", "Caspher", "william"];
    show_magicians(magicians_name);
    // Assignment 42 //
    function show_magicians(magicians) {
        magicians.forEach(name => console.log(name));
    }
    function make_great(magicians) {
        return magicians.map(name => `The Great ${name}`);
    }
    let magicians_name = ["bobby", "philip", "Caspher"];
    let great_magicians = make_great(magicians_name);
    show_magicians(great_magicians);
    // Assignment 43 //
    function show_magicians(magicians) {
        magicians.forEach(name => console.log(name));
    }
    function make_great(magicians) {
        return magicians.map(name => `The Great ${name}`);
    }
    let magicians_name = ["bobby", "philip", "Caspher"];
    // // making a copy of original array through .slice() function //
    let copy_magicians_names = magicians_name.slice();
    // modify the copied array to include "the great" with thier names //
    let copy_great_magicians = make_great(copy_magicians_names);
    // show both arrays original and copied //
    // original
    console.log("original array\n");
    show_magicians(magicians_name);
    // copied 
    console.log("\ncopied array\n");
    show_magicians(copy_great_magicians);
    // Assignment 44 //
    let sandwich_items = ["chicken", "sauce", "pickles", "lettuce"];
    // Define a fuction with a rest parameter that accepts items arguments representing our sandwich
    function make_sandwich(...items) {
        console.log("making a sandwich with the following items: \n");
        items.forEach(singleitem => console.log(singleitem));
        console.log("\nnow enjoy the sandwich!!\n");
    }
    make_sandwich("chicken", "sauce", "pickles");
    make_sandwich("chicken", "lettuce", "sauce");
    make_sandwich("chicken", "sauce");
    // Assignment 45 //
    //define a fuction to create a car object wit optional options...
    function create_car(manufacturer, model, ...options) {
        // initiakize a car object with manufacturer and model
        let car = {
            manufacturer: manufacturer,
            model: model,
        };
        //       // Add additional options to the car objects
        options.forEach(options => {
            let [key, value] = options.split(":");
            car[key.trim()] = value.trim();
        });
        return car;
    }
    // // call the function to create a car object
    let my_car = create_car("toyota", "corolla", "color: Black", "sunroof: True");
    // print the variable to ensure all the information is stored correctly in the car object
    console.log(my_car);
    //        FINISHED!!!         //
}
//        FINISHED!!!         //
