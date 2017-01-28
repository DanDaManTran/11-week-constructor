//construtor function for new Pentagon by creating a var triangle by using the Shape construtor and adding a side to the var and returning it to the new pentagon.
function Pentagon (side1, side2, side3, side4, side5) {
	if(!(this instanceof Pentagon)){
		return new Pentagon (side1, side2, side3, side4, side5);
	}

	this.type = "Pentagon";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
};

module.exports = Pentagon;