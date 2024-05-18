import byleco, { helloWithFullname, API_URL } from "./greetings.js";
import { PI, API_URL as a } from "./const.js";

console.log("TEST");

// console.log(hello());
// console.log(hello("Mike"));

console.log(helloWithFullname("Jane", "Doe"));

console.log("byleco", byleco());

console.log("PI, API_URL", PI, API_URL, a);
