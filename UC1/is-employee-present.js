/*
UC1: Ability to Check Employee is present or Absent
*/
const IS_PRESENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}




