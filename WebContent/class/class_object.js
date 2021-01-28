/**
 * class
 * - 연관있는 변수나 함수를 묶어 놓은 것
 */

//	1. Class declarations

class Person{
	
	// constructor
	constructor(name, age)
	{
		//fields
		this.name = name;
		this.age = age;
	}
	
	// methods
	speak(){
		console.log(`${this.name}: hello!`);
	}	
	
}

const hwi = new Person('hwi',20);
console.log(hwi.name);
console.log(hwi.age);
hwi.speak()
