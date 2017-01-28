

//construtor function for new triangle by creating a var triangle by using the Shape construtor and adding a side to the var and returning it to the new triangle.
function Triangle (side1, side2, side3) {
	if(!(this instanceof Triangle)){
		return new Triangle (side1, side2, side3);
	}

	this.type = "Triangle";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
};

module.exports = Triangle;