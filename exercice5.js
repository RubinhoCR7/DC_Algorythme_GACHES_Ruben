function sortIncreaseArray(data) {
    if(data != "" || data != null || data != []) {
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j < data.length; j++) {
                if (data[i] > data[j]) {
                  temp = data[i];
                  data[i] = data[j];
                  data[j] = temp;
                }
            }
        }
        return data;
    }
    return null;
}
