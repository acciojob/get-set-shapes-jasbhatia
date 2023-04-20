//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	get width(){
		return this.width;
		
	}
	get height(){
		return this.height;
	}

	getArea(){
		let area=this.width*this.height;
		return area;
	}
}

class Square extends Rectangle {
	
	
	getPerimeter(side){
		returns side*side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
