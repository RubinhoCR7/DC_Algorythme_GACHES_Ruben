//Inverser chaine de carac

function reverseString(data) {
    let result = [];
    if(data != "" || data != null) {
        for (let i = data.length - 1; i >= 0; i--) { 
            result.push(data[i]);
        }
        return result.toString();
    }
    return "";
}
