"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// TypeScript function to create a t-shirt with default size as "Large" and default message "I Love TypeScript"
function make_shirt(size = "Large", message = "I Love TypeScript") {
    console.log(`T-shirt Size: ${size}`);
    console.log(`Message: ${message}`);
    console.log(`Summary: T-shirt with size ${size} will have the message "${message}".`);
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("Medium");
// Create a shirt of any size with a different message
make_shirt("Small", "Coding is Fun!");
