class Student {
    constructor(name, age, address, contact) {
        this.personalDetails = {
            name: name,
            age: age,
            address: address,
            contact: contact,
        };

        this.academicDetails = {
            courses: [],
            grades: {},
            currentSemester: 1,
            performance: [],
        };

        this.administrationDetails = {
            feesPaid: 0,
            attendance: 0,
            status: 'Enrolled', // Could be 'Graduated' or 'Dropped'
        };
    }

    // Method to add a course
    addCourse(courseName) {
        this.academicDetails.courses.push(courseName);
    }

    // Method to record a grade for a course
    recordGrade(courseName, grade) {
        if (this.academicDetails.courses.includes(courseName)) {
            this.academicDetails.grades[courseName] = grade;
        } else {
            console.log("Course not found!");
        }
    }

    // Method to update the attendance
    updateAttendance(attendedClasses, totalClasses) {
        this.administrationDetails.attendance = (attendedClasses / totalClasses) * 100;
    }

    // Method to pay fees
    payFees(amount) {
        this.administrationDetails.feesPaid += amount;
    }

    // Method to move to the next semester
    nextSemester() {
        this.academicDetails.currentSemester += 1;
    }

    // Method to graduate the student
    graduate() {
        if (this.administrationDetails.attendance >= 75 && Object.keys(this.academicDetails.grades).length > 0) {
            this.administrationDetails.status = 'Graduated';
            console.log(`${this.personalDetails.name} has graduated!`);
        } else {
            console.log(`${this.personalDetails.name} cannot graduate due to incomplete requirements.`);
        }
    }

    // Method to view student's details
    viewDetails() {
        console.log("Personal Details:", this.personalDetails);
        console.log("Academic Details:", this.academicDetails);
        console.log("Administration Details:", this.administrationDetails);
    }
}

// Example usage
const student = new Student("John Doe", 20, "123 College St", "555-1234");

// Adding courses
student.addCourse("Math 101");
student.addCourse("History 202");

// Recording grades
student.recordGrade("Math 101", "A");
student.recordGrade("History 202", "B+");

// Updating attendance
student.updateAttendance(30, 40); // 30 attended out of 40

// Paying fees
student.payFees(1500);

// Moving to the next semester
student.nextSemester();

// Viewing student details before graduation
student.viewDetails();

// Attempting to graduate the student
student.graduate();

// Viewing student details after graduation
student.viewDetails();
