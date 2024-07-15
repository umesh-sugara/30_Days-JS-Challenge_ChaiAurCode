let num = 2
if(num>0){
    console.log("Positive Number")
}else if(num<0){
    console.log("Negative Number")
}else{
    console.log("Zero Number")
}

let age = 10
if(age>=18){
    console.log("Can Vote")
}else{
    console.log("Cannot Vote")
}

let first=11, second =  44, third = -12;
let big,mid,small=0
if(first>second){
    if(first>third){
        big = first;
        if(second > third){
            mid=second
            small=third
        }else{
            mid = third;
            small=second
        }
    }else{
        big = third
        mid = first
        small = second
    }
}else{
    if(second>third){
        big = second;
        if(first > third){
            mid = first;
            small = third;
        }else{
            mid = third;
            small=first
        }
    }else{
        big = third;
        mid = second;
        small = first
    }
}

console.log(big, mid, small)


let day = 4
switch(day){
    case 1 : console.log("Monday")
    break;
    case 2 : console.log("Tuesday")
    break;
    case 3 : console.log("Wednesday")
    break;
    case 4 : console.log("Thursday")
    break;
    case 5 : console.log("Friday")
    break;
    case 6 : console.log("Saturday")
    default: console.log("Sunday")
}

let marks=89
switch (true) {
    case (marks > 90):
        console.log("A grade");
        break;
    case (marks > 80):
        console.log("B grade");
        break;
    case (marks > 70):
        console.log("C grade");
        break;
    case (marks > 60):
        console.log("D grade");
        break;
    case (marks >= 33):
        console.log("E grade");
        break;
    default:
        console.log("Ooops!! You Failed");
}


let checknum = 11
checknum%2==0? console.log('Even Number') : console.log('Odd Number');


let year=2000;
// check give year is a leap year or not
(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)?console.log("Leap Year"): console.log("Not Leap Year");

// let year = 2000;

// // Check if the given year is a leap year or not
// (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? console.log("Leap Year") : console.log("Not Leap Year");

// let year = 2000;

// (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? console.log("Leap Year") : console.log("Not Leap Year");

