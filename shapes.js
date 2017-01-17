

function Shape () {
	this.type = undefined;

};

Shape.prototype.get_type = function(){
	console.log("This shape type is " + this.type);
};





function Triangle (side1, side2, side3) {

	this.type = "triangle";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
}

Triangle.prototype = new Shape();
Trianble.prototype.constructor = Triangle;

