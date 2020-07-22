const caesar = function(phrase, shift) {
    // account for large shifts
    shift = shift%26;
    
    // turn phrase into an array
    phrase = phrase.split('');
    // loop through each letter in array
    for (i=0; i<phrase.length; i++) {
        if ((phrase[i].charCodeAt(0) > 96) && (phrase[i].charCodeAt(0) < 123)) {
            // turn into ascii code then subtract to get alpha position
            let preShift = phrase[i].charCodeAt(0) - 96;
            let postShift = preShift + shift;
            // account for looping back around at end
            if (postShift <= 26 && postShift > 0) {
                phrase[i] = String.fromCharCode(postShift + 96);
            } else if (postShift < 1) {
                phrase[i] = String.fromCharCode(postShift + 64 + 26);
            } else {
                phrase[i] = String.fromCharCode(shift + 96 - (26 - preShift));
            }
        } else if ((phrase[i].charCodeAt(0) > 64) && (phrase[i].charCodeAt(0) < 91)) {
            // account for capital letters too
            let preShift = phrase[i].charCodeAt(0) - 64;
            let postShift = preShift + shift;
            // account for looping back around at end
            if (postShift <= 26 && postShift > 0) {
                phrase[i] = String.fromCharCode(postShift + 64);
            } else if (postShift < 1) {
                phrase[i] = String.fromCharCode(postShift + 64 + 26);
            } else {
                phrase[i] = String.fromCharCode(shift + 64 - (26 - preShift));
            }
        } else {
            // just keep it as is if it's punctuation 
            phrase[i] = phrase[i];
        }
    }
    let newPhrase = phrase.join('');
    return newPhrase;

}

module.exports = caesar
