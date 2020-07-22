let findTheOldest = function(peopleArray) {
    
    const todaysDate = new Date();
    const currentYear = Number(todaysDate.getFullYear());

    const ageArray = [];

    for (i=0; i<peopleArray.length; i++) {
        if (peopleArray[i].yearOfDeath == undefined) {
            ageArray[i] = currentYear - peopleArray[i].yearOfBirth;
        } else {
            ageArray[i] = peopleArray[i].yearOfDeath - peopleArray[i].yearOfBirth;
        }
        
    }
    
    const maxAge = Math.max(...ageArray);

    const isMaxAge = (element) => element == maxAge;
    
    maxAgeIndex = ageArray.findIndex( isMaxAge );

    return peopleArray[maxAgeIndex];
}

module.exports = findTheOldest
