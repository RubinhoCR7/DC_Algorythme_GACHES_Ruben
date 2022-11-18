function sumOfTheNumber(data) {
    if(data != "" || data != null || data > 0) {
        let n = 0;
        let result = 0;
        while (n < data) {
            n++;
            result += n;
        }
        return result;
    }
    return null;
}
