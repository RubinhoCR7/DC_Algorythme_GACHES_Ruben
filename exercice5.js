exercice5.js

import java.util.Arrays;

	public class ArraysTest {

 		public static void main(String[] args) {

 	//init tableau
 	int array[] = {6, 2, 76, 12, 7, 100};

 	//afficher tous les nombres
 	for (int entier : array) {
 	System.out.println("nombre: " + entier);
 	}

 	//trier dans le tableau
 	Arrays.sort(array);

 	//afficher les nombres dans l'odre après le tri
 	System.out.println("Tableau trié\n");
 	for (int entier : array) {
 	System.out.println("nombre: " + entier);
 	}
 		}
}
