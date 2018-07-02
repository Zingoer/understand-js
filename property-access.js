var cl = console.log;
var ts = JSON.stringify;
var person = {};
person.name = "Mrs. White";
cl(`person: ${ts(person)}`);

var person2 = {
  name: "Mrs. WhiteWhite"
};
cl(`person2: ${ts(person2)}`);

var who = person.name; //Save primitive value by value
cl(`who: ${ts(who)}`);

person.name = "Mr.Whatever";
cl(`person: ${ts(person)}`);
cl(`who: ${ts(who)}`);

cl(who.story);
