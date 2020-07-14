var demo = /** @class */ (function () {
    function demo() {
    }
    demo.prototype.getUsername = function () {
        return this.getUsername; //username
    };
    demo.prototype.setUsername = function () {
        this.username = "hello";
    };
    return demo;
}());
var d = new demo;
d.setUsername();
console.log(d.getUsername());
