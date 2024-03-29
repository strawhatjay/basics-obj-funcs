/* Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = 
function(){
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// Additional Objects

var Breath = function(name, element, forms){
    this.name = name;
    this.element = element;
    this.forms = forms;
}

Breath.prototype.user = 'Tanjiro';

var water = new Breath('Breath of Water', 'Water', 11);
var sun = new Breath('Breath of Sun', 'Sun', 13);

console.log(water.user);
console.log(sun.user);
 */

// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
})
*/

// Primitives vs Objects
/*

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects
var obj1 = {
    name: 'John',
    age: 29
};

var obj2 = obj1;
obj1.age = 32;
console.log(obj1);
console.log(obj2)

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city)
*/

// Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 1984, 2020];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
};

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
    return -1
    }
};


var ages = arrayCalc(years, calculateAge)
var fullAges = arrayCalc(ages, isFullAge);
var heartRates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(heartRates);
*/

// Lecture: Functions returning functions
/*
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain whast UX design is?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher'); 
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/

// Lecture: IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
*/
/*
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

// Lecture: Closures
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

// retirement(66)(1990);

// function interviewQuestion(job) {
//     if(job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain whast UX design is?');
//         }
//     } else if(job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain whast UX design is?');
        } else if( job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/

/// Lecture: Bind, call, and apply
/*
var john = {
    name: 'John',
    age: 29,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};


var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning')

john.presentation.call(emily, 'friendly', 'afternoon')

// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var years = [1990, 1965, 1937, 1984, 2020];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
};

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/


// Coding Challenge #7
/*
(function() {

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = 
    function() {
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
};

Question.prototype.checkAnswer = 
    function(ans, callback) {
        var sc;

        if(ans === this.correct) {
            console.log('Correct Answer')
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try Again: ')
            sc = callback(false);
        }
        this.displayScore(sc);
};

Question.prototype.displayScore = 
    function(score) {
        console.log('Your currenct score is:' + score);
        console.log('----------------------------');

}


var question1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);

var question2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);

var question3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

var questions = [question1, question2, question3];

function score() {
    var sc = 0;
    return function(correct) {
        if (correct) {
            sc++;
        } 
        return sc;
    }
};

var keepScore = score();

function nextQuestion(){
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    var answer = prompt('Please select the correct answer.');

    if(answer !== 'exit') {
        questions[n].checkAnswer(parseInt(answer), keepScore);

        nextQuestion();
    }
};

nextQuestion();

})();
*/