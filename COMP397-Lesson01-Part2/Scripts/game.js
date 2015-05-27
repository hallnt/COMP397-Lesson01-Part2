var Person = (function () {
    function Person() {
    }
    //CONSTRUCTOR++++++++++++++++++++++++
    Person.prototype.Constructor = function () {
    };

    //PUBLIC METHODS+++++++++++++++++++++
    Person.prototype.saysHello = function () {
        console.log("hello world!");
    };
    return Person;
})();

function init() {
    var myPerson = new Person();
    myPerson.saysHello();
}
//# sourceMappingURL=game.js.map
