/*
 * UC2: Ability to Calculate Daily Employee Wage
 * - Use Math.random() to check if an employee works Full-Time, Part-Time, or No Work.
 * - Assume:
 *   - Part-Time = 4 Hours
 *   - Full-Time = 8 Hours
 *   - Wage Per Hour = $20
 * - Use a switch case to determine the working hours.
 * - Calculate and print the daily wage.
 */

// Constants
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Variable to store employee working hours
let empHrs = 0;

// Generate random work type (0, 1, or 2)
let empCheck = Math.floor(Math.random() * 10) % 3;

// Determine working hours using switch case
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

// Calculate Employee Wage
let empWage = empHrs * WAGE_PER_HOUR;

// Print Output
console.log("Employee worked " + empHrs + " hours. Emp Wage: $" + empWage);
