/* this refers to calling site/context. this does not work with 
arrow functions.
*/

let object = {
    name: "Lakshmi",
    age : 36,
    address : "Bangalore",
    print: function (){
        console.log("i am this", this)
    }
}

object.print(); /*i am this {name: "Lakshmi",
                            age : 36,
                            address : "Bangalore",
                            print:[Function: print]} 
                            */

let object2 = {
    name: "Lakshmi",
    age : 36,
    address : "Bangalore",
    print: () => {
        console.log("i am this", this)
    }
}

object2.print(); //i am this {}

let object3 = {
    name: "Lakshmi",
    age : 36,
    address : "Bangalore",
    print: function display(){
        console.log("Demonstaration of this");
        let object2 = {
            name: "Lakshmi",
            age : 36,
            address : "Bangalore",
            print: () => {
                console.log("i am this", this)
            }
        }
        object2.print();
    }
}

object3.print();
