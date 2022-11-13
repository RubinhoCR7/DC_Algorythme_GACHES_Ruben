// Algo JS pour trouver le plus grand des trois entiers donnés.(tableau donné en paramètre de la fonction)

function SerieDinProgress(array){
	let max = Math.max.apply(Math, array)
	console.log(max)
}

SerieDinProgress([17,7,150,4,21])