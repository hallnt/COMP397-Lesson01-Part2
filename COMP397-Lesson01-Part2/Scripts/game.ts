class Person {
    //CONSTRUCTOR++++++++++++++++++++++++
    Constructor() {
    }
    //PUBLIC METHODS+++++++++++++++++++++
    public saysHello() {
        console.log("hello world!");
    }
} 

function init() {
    var myPerson = new Person();
    myPerson.saysHello();
}
