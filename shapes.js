'use strict';
const Square = require("./square.js");
const Triangle = require("./triangle.js");
const Pentagon = require("./pentagon.js");

//construtor function for shapes, double checks of we put new while creating a "new shape"
function Shape (type) {
	if(!(this instanceof Shape)){
		return new Shape (type);
	}

	this.type = type;
};

//adding a get_type function to the Shape prototype which will return shape type
Shape.prototype.get_type = function() {
	return "This shape type is " + this.type;
};

//adding a get_totalLength function to the Shape prototype which will return the total length
Shape.prototype.get_totalLength = function () {
	var length = 0;
	if (this.type === 'Triangle') {
		length = this.side1 + this.side2 + this.side3;
	} else if (this.type === 'Square') {
		length = 4 * this.side;
	} else if (this.type === "Pentagon") {
		length = this.side1 + this.side2 + this.side3 + this.side4 + this.side5;
	}
	return length;
};

//slapping Shape stuff into Square 
Square.prototype = new Shape();
Square.prototype.construtor = Square;

//slapping Shape stuff into Triangle 
Triangle.prototype = new Shape();
Triangle.prototype.construtor = Triangle;

//slapping Shape stuff into Triangle 
Pentagon.prototype = new Shape();
Pentagon.prototype.construtor = Pentagon;

//creating variables of each constructor
var tri1 = new Triangle(3,4,5);
var square1 = new Square(4);
var pent1 = new Pentagon(1,2,3,4,5);
var shape = new Shape("shape");

//getting different types
console.log(tri1.get_type());
console.log(tri1.get_totalLength());
console.log(square1.get_type());
console.log(square1.get_totalLength());
console.log(pent1.get_type());
console.log(pent1.get_totalLength());
console.log(shape);

// Ensuring instanceof works as expected.
console.log(tri1 instanceof Triangle);
console.log(square1 instanceof Square);
console.log(pent1 instanceof Pentagon);
console.log(shape instanceof Shape);
