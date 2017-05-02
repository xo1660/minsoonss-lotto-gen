function generate(){
	var number = [];

	for(var i = 0; i < 6; i++){
		number.push(Math.floor(Math.random()*45));
	}

	return number;
}
