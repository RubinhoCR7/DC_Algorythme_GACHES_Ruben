// trouver le plus grand nombre

function findTheThreeBiggestNumber(data) {
    if(data != "" || data != null || data != 0 || data != []) {
        let result = data[0];
        for (let i = 0; i < data.length; i++) {
            if(result < data[i]) {
                result = data[i];
            }
        }
        return result;
    }
    return null;
}
