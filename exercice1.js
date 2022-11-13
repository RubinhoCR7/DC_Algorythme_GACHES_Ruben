function inverse(mot){

		var caDecompose = mot.split(""); 
    	var caInverse = caDecompose.reverse(); 
    	var nouveauWord = caInverse.join(""); 
    	console.log(nouveauWord)
    return nouveauWord;

}
inverse("arrivederci")