///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const cartValue = [9.99, 8.99, 7.99]
const initialValue = 0
const summedPrice = cartValue.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/
var tax = (26.97 * 0.06)
var cartTotal = 26.97
var couponValue = 5.00
function calcFinalPrice(cartTotal, couponValue, tax){
    return cartTotal + tax - couponValue
}
console.log(cartTotal + tax - couponValue);


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Customer Object
    property 1 - name: Important to know your clientals name as it helps to establish friendly rapport with a client that can lead to repeat clients
    property 2 - age: Can help determine an age range/demographic profile to help marketing understand its client base
    property 3 - the usual: What the client usually orders as it can then become something that is highlighted to other future clients also establishes more rapport if their usual order is remembered and noticed
    property 4 - allergies: Avoid getting sued is a pretty gosh dang good reason to have this.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

class customer{
    constructor (customerName, age, usual, allergies){
    this.customerName = customerName;
    this.age = age;
    this.usual = usual;
    this.allergies = allergies;
    }
}
