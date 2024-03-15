# Mixed Messages

## Project aim
-----------------
The aim of this project is to initiate a series of arrays within an object literal and implement object methods that iterate through the object arrays to generate a random joke and response.

### The script will work as follows:
1. an object literal is provided that contains 3 properties, one containing a array of assorted jokes, another containing a single string, and a final property containing another array of messages.
2. 3 methods are provided in the object:
    - the first method returns a random joke from the jokes array.
    - the second method returns a random message from the 'mesgEnd' array.
    - the final method is a get method which combines the returned results from the previous 2 methods as well as the 'msg' property into a template literal.
3. the object and its get method are logged to the console from outside the object, providing the user with a random joke, and a random message!