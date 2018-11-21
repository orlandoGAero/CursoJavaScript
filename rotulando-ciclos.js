
for_principal:
for(var i = 0; i <= 5; i++){
	console.log("i: ", i);

	for_secundario:
	for(var  j = 0; j <= 5; j++){
		console.log("j: ", j);

		for(var x = 0; x <= 5; x++){
			console.log("x: ", x);
			break for_secundario;
			
		}
	}
}