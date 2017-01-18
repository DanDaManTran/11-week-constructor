

function Shape (type) {
	if(!(this instanceof Shape)){
		return new Shape (type);
	}

	this.type = type;
	this.length = 0;
};

Shape.prototype.get_type = function() {
	return "This shape type is " + this.type;
};

Shape.prototype.get_totalLength = function () {
	var length = 0;
	if (this.type == 'triangle') {
		length = this.side1 + this.side2 + this.side3;
	} else if (this.type == 'Square') {
		length = 4 * this.side;
	}
	return length;
}

function Square (side) {
	if(!(this instanceof Square)){
		return new Square (side);
	}

	var square = new Shape('Square');
	square.side = side;
	return square;
}


function Triangle (side1, side2, side3) {
	if(!(this instanceof Triangle)){
		return new Triangle (side1, side2, side3);
	}

	var triangle = new Shape("triangle");
	triangle.side1 = side1;
	triangle.side2 = side2;
	triangle.side3 = side3;
	return triangle;
}

var tri1 = new Triangle(3,4,5);
var square1 = new Square(4);

console.log("tri1 type:" + tri1.type);
console.log("tri1 length:" + tri1.get_totalLength() + "end");
console.log("square1 type:" + square1.type);
console.log("square1 length:" + square1.get_totalLength());

