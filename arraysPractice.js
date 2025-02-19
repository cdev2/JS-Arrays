//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item in the given array.

  //Code Here
function first(arr){
  return arr[0];
}

//Next problem



var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item in the given array.


  //Code Here
function last(arr){
  return arr[arr.length -1];
}

//Next Problem


var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

  //Code Here
function looper(arr){
  for(var i = 0; i < arr.length; i++){
    alert(arr[i]);
  }
}

//Next problem



var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

  //Code Here
function reversedLooper(arr){
  for(var i = 0;i < arr.length; i++){
    arr = arr.slice().reverse();
    alert(arr[i]);
  }
}

//Next Problem


var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

  //Code Here
function evenFinder(nums){
  var evens = [];
  for(var i = 0;i < nums.length;i++){
    if(nums[i] % 2 != 0){
      //evens.push(nums[i]);
      nums.splice([i],1)
    }
  }
  return nums;//alternate method return evens
}
//alternate solution
//nums.filter(function(cur,idx,arr){
  //return cur % 2 === 0;
//Next problem


var numbersArray = [1,2,34,54,55,34,32,11,19,17,54,66,13];
//Write a function called divider that is given one argument, numbersArray.
//Have divider return an Array with the first item in the array being the evens array (all the even values from numbersArray) and the second item in the Array being the odds array (all the odd values from numbersArray).



  //Code Here
function divider(numbersArray){
  var evens = [];
  var odds = [];
  for(var i = 0;i < numbersArray.length;i++){
    if(numbersArray[i] % 2 === 0){
      evens.push(numbersArray[i]);
    }else{
      odds.push(numbersArray[i]);
    }
  }
  return [evens, odds];
}

//Next Problem


var getRandomArbitrary = function() {
  return Math.floor(Math.random() * 30);
};
 var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above you're given a function that will return a random number between 0 and 30.  There is also a commented out array full of numbers to help you visualize what your function will be receiving.

// Your job is to write a function named finder that will get a random number (by invoking getRandomArbitrary), then loop through the array (that will be passed in as a parameter) to see if that random number is in the array. If it is, return true, if it's not, return false

  //Code Here
function finder(numbers){
var random = getRandomArbitrary();
for(var i = 0; i < numbers.length; i++){
  if(random === numbers[i]){
    return true;
  }
}
return false;
}
  //Code Here


//Next problem



var str = 'this is my sentence';
//Write a function called reverse that takes a given str as it's only argument and returns that string after it's been reversed

  //Code Here
function reverse(str){
  return str.split("").reverse().join("");
}

//Next Problem


var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list.

  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list.

  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.

  In both the removeItem function and the addItem function, you will also need to check for valid aurguments. Specrunner will try to call your functions without passing in valid aurguments. When this happens, you will need to respond by returning an empty array.
*/

  //Code Here
  function removeItem(myGroceryList,item){
for(var i = 0 ; i < myGroceryList.length; i++){
  if(myGroceryList[i] === item){
    myGroceryList.splice([i],1);
  }
}
return myGroceryList;
  }

//removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
function addItem(myGroceryList,item){
  myGroceryList.push(item);
  return myGroceryList;
}
  
    



//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

  //Code Here

function maker(){
    var arr = [];
  for(var i = 1; i <= 215; i++){
  
  arr.push(i);
   
  }
  return arr;
}

//Next Problem


var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

  //Code Here
function addTen(numbers){
  var secondArray = [];
  for(i = 0; i < numbers.length; i++){
    secondArray.push(parseFloat(numbers[i]) + 10);
  }
  return secondArray;
}



//Next Problem



var num1 = Math.floor(Math.random() * 30);
var num2 = Math.floor(Math.random() * 30);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number of values to both arr1 and arr2.
//Write a function called 'longer' that is given arr1 and arr2 as it's only arguments. Return the array which is longest.

  //Code Here
function longer(arr1, arr2){
  if(arr1.length > arr2.length){
  return arr1;
}else{
  return arr2;
}
}


/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).
  'both' should return a new array with the matching numbers found in both arr1 and arr2.
  Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
*/

  //Code Here

function both(arr1, arr2){
  var newArray = [];
  for(var i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) !== -1){
      newArray.push(arr1[i]);
    }
  }
  return newArray
}



//NEXT PROBLEM




var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
};

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

  //Code Here
devMountainEmployees.push(tyler,cahlan,ryan,colt)
console.log(devMountainEmployees.length)

/*Now let's say Cahlan has a mental breakdown and has to take a leave of absence to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

  //Code Here
for(var i = 0; i < devMountainEmployees.length; i++){
    if(devMountainEmployees[i].name === "Cahlan"){
        console.log("True")
        devMountainEmployees.splice(i, 1)
    }
}




//NEXT PROBLEM


/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

  //Code Here
var users = [];
/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

//include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
};

//Your Code Here
var users = [{name: "Tyler McGinnis", email: "tylermcginnis33@gmail.com", password: "iloveJavascript", username: "infiniateLoop"},
{name: "Ranger Walker", email: "walker@rangers.com", Password: "rangers", username: "walker"}, 
{name: "James West", email: "james@west.com", password: "batman", username: "batman"}]


/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular index he's located in, delete him from the array.*/

  //Code Here
for(var i = 0; i < users.length; i++){
    if(users[i].email === "tylermcginnis33@gmail.com"){
        users.splice(i,1);
    }
}

//The activity we just did is very much how data works in 'the real world'.
