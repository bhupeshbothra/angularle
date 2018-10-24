var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.drow = function () {
        console.log('X : ' + this.x + ' Y: ' + this.y);
        
    };
    return Point;
}());
var point = new Point(5, 6);
point.drow();
