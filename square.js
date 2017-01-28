

//construtor function for new squares by creating a var square by using the Shape construtor and adding a side to the var and returning it to the new square.
function Square (side) {
	if(!(this instanceof Square)){
		return new Square (side);
	}

	this.type = "Square";
	this.side = side;
};

module.exports = Square;