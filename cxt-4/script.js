console.log("------------------ One ------------------");
//1.Examination status function (JAMB-style)
function examStatus(score) {
    if (Number(score) < 180) {
        return "Failed";
    }
    return "Passed";
}
console.log(examStatus(170));
console.log(examStatus(179.9999));
console.log(examStatus(20 * 10));
console.log(examStatus(180));
console.log(examStatus(300));

console.log("------------------ Two ------------------");

//2. Vote eligibility funtion
function voteEligibility(age) {
    if (Number(age) < 18) {
        return "Not eligible";
    }
    return "You are eligible to vote";
}
console.log(voteEligibility(11));
console.log(voteEligibility(17));
console.log(voteEligibility(50));

console.log("------------------ Three ------------------");

//3. Grade classification function
function gradeClassification(name, score) {
    if (Number(score) >= 90) {
        return `${name}: Excellent `;
    } else if (Number(score) >= 75) {
        return `${name}: Good`;
    } else if (Number(score) >= 50) {
        return `${name}: Average`;
    } else {
        return `${name}: Fail`;
    }
}
console.log(gradeClassification("English", 100));
console.log(gradeClassification("Mathematics", 80));
console.log(gradeClassification("Geography", 69));
console.log(gradeClassification("French", 49.9));

console.log("------------------ Four ------------------");
//4. Access granting function
function access(hasID, isAbove18) {
    if (hasID && isAbove18) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}
console.log(access(true, true));
console.log(access(false, false));
console.log(access(true, false));

console.log("------------------ Five ------------------");
//5. Grade classification
let studentScore = [109, 34, 70, 49, 92];

for (let i = 0; i < studentScore.length; i++) {
    if (studentScore[i] > 50) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

console.log("------------------ Six ------------------");
//6. Funtion to determine student pass status in Math and English

let students = [
    {
        name: "Joyce Gabby",
        class: "SS 2",
        subjectScore: {
            maths: 50,
            english: 59,
            economics: 100,
            geography: 75,
            pysics: 69,
        },
    },
    {
        name: "Bayley Amaka",
        class: "SS 2",
        subjectScore: {
            maths: 30,
            english: 80,
            economics: 100,
            geography: 75,
            pysics: 69,
        },
    },
    {
        name: "Glory Aba",
        class: "SS 2",
        subjectScore: {
            maths: 77,
            english: 80,
            economics: 100,
            geography: 75,
            pysics: 69,
        },
    },
    {
        name: "Joe Oludara",
        class: "SS 2",
        subjectScore: {
            maths: 79,
            english: 40,
            economics: 100,
            geography: 75,
            pysics: 69,
        },
    },
];

const statusFeedback = (mathScore, englishScore) => {
    if (mathScore >= 50 && englishScore >= 50) {
        return "Yes";
    } else {
        return "No";
    }

    // let feedback = (mathScore >= 50) && (englishScore >= 50) ? "Yes" : "No"
    // return feedback
};

// Looping to print out all students status in Maths and English
for (let i = 0; i < students.length; i++) {
    let { maths, english } = students[i].subjectScore;
    console.log(`Maths: ${maths} | English: ${english}`);

    console.log(statusFeedback(maths, english));
}

console.log("------------------ Seven ------------------");
// 7. Sign-up function
function signUp(email, phoneNumber) {
    //Reminder: add regular expressions to email
    if (!(email?.trim() || phoneNumber?.trim())) {
        return "Sign-up unsuccessful. A phone number or an email is required.";
    }
    return "Sign-up successful.";
}
console.log(signUp());
console.log(signUp("joy@gmail.com", "0980767575"));
console.log(signUp("0980767575"));
console.log(signUp("joy@gmail.com"));


// 8. Input validator function
console.log("------------------ Eight ------------------");

function validator(username, password) {
    //Reminder: add regular expressions to email
    if (!(username?.trim() || password?.trim())) {
        return "Invalid input";
    }
    return "Valid input";
}

console.log(validator("joy4life", "Yes_567_896*"));
console.log(validator("Yes_567_896*"));
console.log(validator("joy4life"));
console.log(validator(" "));


//9. Work duration function
console.log("------------------ Nine ------------------");

function workDuration(workHours) {
    if (!workHours) {
        return "Input work hour(s)";
    }

    let result = Number(workHours) >= 40 ? "Full-time" : "Part-time";
    return result;
}

console.log(workDuration(36));
console.log(workDuration());
console.log(workDuration(47));


// 10. Function that returns the larger  number
console.log("------------------ Ten ------------------");

const largerNumber = (firstNumber, secondNumber) => {
    let numOne = Number(firstNumber);
    let numTwo = Number(secondNumber);

    if(isNaN(numOne) || isNaN(numTwo)){
        return("Invalid input. Input must be two numbers")
    }

    if (numOne > numTwo) {
        return numOne;
    } else {
        return numTwo;
    }
}

console.log(largerNumber(89, 500));
console.log(largerNumber("6y6yj", 7));
console.log(largerNumber("89", 7));
console.log(largerNumber(980,"304"));
console.log(largerNumber());