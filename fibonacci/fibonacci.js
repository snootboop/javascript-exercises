const fibonacci = function(num) {
    let fibNum = [1,1];
    if (num > 0) {
        for (i=2; i<num; i++) {
            fibNum[i] = fibNum[i-1] + fibNum[i-2];
        }
        return fibNum[num-1];
    } else {
        return "OOPS";
    }
}

module.exports = fibonacci
