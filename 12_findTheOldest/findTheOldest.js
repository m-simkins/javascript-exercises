const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();
    people.forEach(person => {
        if (!person.yearOfDeath) {
            person.age = thisYear - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });
    people.sort((a,b) => b.age - a.age);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
