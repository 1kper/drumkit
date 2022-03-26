
/////I HAVE TO USE DRY METHOD INSTEAD OF COPY PASTE
// var buttonArray = document.querySelectorAll(".drum");
//
//
// var i =1;
// var barray = Array.from(buttonArray);
//
// Array.from(buttonArray).forEach((button)=>{
//   innerHtml=button.innerHTML;
//   button.addEventListener("click",()=>{
//     console.log(innerHtml);
//     switch(innerHtml){
//
//        case "w":{
//         // button.addEventListener("click",()=>{
//         //   button.style.color = 'white';
//          var audio = new Audio('sounds/crash.mp3');
//                   audio.play();
//                 // }
//
//
//           break;}
//       case "a":{
//        // button.addEventListener("click",()=>{
//         var audio = new Audio('sounds/kick-bass.mp3');
//                  audio.play();
//                // });
//
//          break;}
//        case "s":{
//       //  button.addEventListener("click",()=>{
//          var audio = new Audio('sounds/snare.mp3');
//                   audio.play();
//                 //});
//
//           break;}
//        case "d":{
//         //button.addEventListener("click",()=>{
//           // button.style.color = 'white';
//          var audio = new Audio('sounds/tom-1.mp3');
//                   audio.play();//});
//
//           break;}
//        case "j":{
//         //button.addEventListener("click",()=>{
//          var audio = new Audio('sounds/tom-2.mp3');
//                   audio.play();//});
//
//           break;}
//        case "k":{
//         //button.addEventListener("click",()=>{
//          var audio = new Audio('sounds/tom-3.mp3');
//                   audio.play();//}//);
//
//           break;}
//
//           case "l":{
//           // button.addEventListener("click",()=>{
//             var audio = new Audio('sounds/tom-4.mp3');
//                      audio.play();//});
//
//              break;}
//
//
//     }
//   })
//
//
// });




// Array.from(buttonArray).forEach((button)=>{
//
//
//
//
//
//   switch(i){
//    case 1:{
//     button.addEventListener("click",()=>{
//       button.style.color = 'white';
//      var audio = new Audio('sounds/crash.mp3');
//               audio.play();});
//
//       break;}
//   case 2:{
//    button.addEventListener("click",()=>{
//     var audio = new Audio('sounds/kick-bass.mp3');
//              audio.play();});
//
//      break;}
//    case 3:{
//     button.addEventListener("click",()=>{
//      var audio = new Audio('sounds/snare.mp3');
//               audio.play();});
//
//       break;}
//    case 4:{
//     button.addEventListener("click",()=>{
//       button.style.color = 'white';
//      var audio = new Audio('sounds/tom-1.mp3');
//               audio.play();});
//
//       break;}
//    case 5:{
//     button.addEventListener("click",()=>{
//      var audio = new Audio('sounds/tom-2.mp3');
//               audio.play();});
//
//       break;}
//    case 6:{
//     button.addEventListener("click",()=>{
//      var audio = new Audio('sounds/tom-3.mp3');
//               audio.play();});
//
//       break;}
//
//       case 7:{
//        button.addEventListener("click",()=>{
//         var audio = new Audio('sounds/tom-4.mp3');
//                  audio.play();});
//
//          break;}
//
//   }
//
//
//   i++;
// })

//
// document.addEventListener("keydown",(eve)=>{
// console.log(eve.key);
 //  switch(eve.key){
 //   case "w":{
 //    // button.addEventListener("click",()=>{
 //    //   button.style.color = 'white';
 //     var audio = new Audio('sounds/crash.mp3');
 //              audio.play();
 //            // }
 //
 //
 //      break;}
 //  case "a":{
 //   // button.addEventListener("click",()=>{
 //    var audio = new Audio('sounds/kick-bass.mp3');
 //             audio.play();
 //           // });
 //
 //     break;}
 //   case "s":{
 //  //  button.addEventListener("click",()=>{
 //     var audio = new Audio('sounds/snare.mp3');
 //              audio.play();
 //            //});
 //
 //      break;}
 //   case "d":{
 //    //button.addEventListener("click",()=>{
 //      // button.style.color = 'white';
 //     var audio = new Audio('sounds/tom-1.mp3');
 //              audio.play();//});
 //
 //      break;}
 //   case "j":{
 //    //button.addEventListener("click",()=>{
 //     var audio = new Audio('sounds/tom-2.mp3');
 //              audio.play();//});
 //
 //      break;}
 //   case "k":{
 //    //button.addEventListener("click",()=>{
 //     var audio = new Audio('sounds/tom-3.mp3');
 //              audio.play();//}//);
 //
 //      break;}
 //
 //      case "l":{
 //      // button.addEventListener("click",()=>{
 //        var audio = new Audio('sounds/tom-4.mp3');
 //                 audio.play();//});
 //
 //         break;}
 // default:{}
 //  }




//
// });




///////class////////////////////
class Mite {
  constructor(name,age,location){}
  findIt(){}

}

const firstOne = new Mite("mike",5,"pak");


////////////constructor function (it will behave like a class thus we have to use this and new keyword)////////////////////

function Person(name, age, location, occupation){
    this.name = name
    this.age = age
    this.location = location
    this.occupation = occupation
}

Person.prototype.printDetails = function(){
        console.log(`My name is ${this.name} and I'm ${this.age} years old. I live in ${this.location} and I work as a ${this.occupation}.`);
};

const secondUser = new Person('Johnny', 25, 'London', 'Driver');
secondUser.printDetails();

///////or

function Person(name,age,location){
   this.name = name;
   this.age=age;
   this.location=location;
   this.fintIt = function(){};

}

const secondUser2 = new Person("johny",15,"uk");


//////////////factory funtion  will return a value thus we don't have to use the  new keyword////////////////////
///// it is little bit beneficial as we can get a object having different value than what we input in it
function PersonMaker (name, age, location, occupation) {

    let person = {name, age, location, occupation};

    person.printDetails = () => {
        console.log(`My name is ${name} and I'm ${age} years old. I live in ${location} and I work as a ${occupation}.`);
    };

    return person;
}

const secondUser1 = PersonMaker('Johnny', 25, 'London', 'Driver');
secondUser1.printDetails();
////or
function factoryFunction() {
   var obj = {
      someProp1 : "1",
      someProp2 : "2",
      someMethod: function() { /* whatever */ }
   };
   // other code to manipulate obj in some way here
   return obj;
}




// buttonArray[1].addEventListener("click",handleClick);
//
// function handleClick(){
//   alert("i got clicked");
//
//
//
//
//
//
//
//
//
// }
//
//
//
// ////////////////////////////////////////////////////////////////////////
// v2 with dry of code/////////////////////////
///////calling the event listener for button/////
var buttonArray = document.querySelectorAll(".drum");


// var i =1;
var barray = Array.from(buttonArray);

Array.from(buttonArray).forEach((button)=>{

  // console.log(innerHtml);
  button.addEventListener("click",()=>{
    // const innerHtml=button.innerHTML;
    // console.log(innerHtml);
    makeSound(button.innerHTML);
    flashElement(button.innerHTML);

  })})



///////////////////////////////callding evenlistener for keys//////////////
document.addEventListener("keydown",(eve)=>{
console.log(eve.key);
makeSound(eve.key);
flashElement(eve.key);
});


///////////////////////////adding flash animation to the event/////////////////
function flashElement(evt){
   const elem = document.querySelectorAll("."+evt);
   console.log(elem);
   elem[0].classList.add("pressed");

   setTimeout(()=>{elem[0].classList.remove("pressed")},100);
}

/////////////////the makeSound Function/////////////
/////////////////
/////////////////
/////////////////
/////////////////
/////////////////
/////////////////
function makeSound(param){
  switch(param){
   case "w":{
    // button.addEventListener("click",()=>{
    //   button.style.color = 'white';
     var audio = new Audio('sounds/crash.mp3');
              audio.play();
            // }


      break;}
  case "a":{
   // button.addEventListener("click",()=>{
    var audio = new Audio('sounds/kick-bass.mp3');
             audio.play();
           // });

     break;}
   case "s":{
  //  button.addEventListener("click",()=>{
     var audio = new Audio('sounds/snare.mp3');
              audio.play();
            //});

      break;}
   case "d":{
    //button.addEventListener("click",()=>{
      // button.style.color = 'white';
     var audio = new Audio('sounds/tom-1.mp3');
              audio.play();//});

      break;}
   case "j":{
    //button.addEventListener("click",()=>{
     var audio = new Audio('sounds/tom-2.mp3');
              audio.play();//});

      break;}
   case "k":{
    //button.addEventListener("click",()=>{
     var audio = new Audio('sounds/tom-3.mp3');
              audio.play();//}//);

      break;}

      case "l":{
      // button.addEventListener("click",()=>{
        var audio = new Audio('sounds/tom-4.mp3');
                 audio.play();//});

         break;}
 default:{}
  }
}
