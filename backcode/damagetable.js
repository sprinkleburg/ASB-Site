var typeNames =
new Array("NONE","Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying",
          "Ghost","Grass","Ground","Ice","Normal","Poison","Psychic",
          "Rock","Steel","Water");

function calcgrass1() {
	if(type1 == 12 || type1 == 17 || type1 == 19) {
		return 1;
	}
	else if(type1 == 2 || type1 == 4 || type1 == 8 || type1 == 9 || type1 == 11 || type1 == 15 || type1 == 18) {
		return -1;
	}
	else {
		return 0;
	}
}

function calcgrass2() {
	if(type2 == 12 || type2 == 17 || type2 == 19) {
		return 1;
	}
	else if(type2 == 2 || type2 == 4 || type2 == 8 || type2 == 9 || type2 == 11 || type2 == 15 || type2 == 18) {
		return -1;
	}
	else {
		return 0;
	}
}

function calcsumgrass() {
	return grass1 + grass2;
}

function calcgrassdamage() {
	if(sumgrass == 2) {
		return 3;
	}
	else if(sumgrass == 1) {
		return 2;
	}
	else if(sumgrass == 0) {
		return 1;
	}
	else if(sumgrass == -1) {
		return .5;
	}
	else if(sumgrass == -2) {
		return .33;
	}
	else {
		return 0;
	}
}

window.onload = function setgrass() {
	document.getElementById("grass").innerHTML = grassdamage;
}