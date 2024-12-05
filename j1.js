// Function to check exam eligibility
function isEligibleForExam(attendancePercentage, internalMarks) {
    const attendanceThreshold = 75; // Minimum required attendance percentage
    const marksThreshold = 50; // Minimum required marks for internal exams
  
    // Check if both conditions are met
    if (attendancePercentage >= attendanceThreshold && internalMarks >= marksThreshold) {
      console.log("The person is eligible for the semester exam.");
    } else {
      console.log("The person is not eligible for the semester exam.");
    }
  }
  
  // Test with example values
  let attendance = 80;  // Example: 80% attendance
  let marks = 60;       // Example: 60% in internal exams
  
  isEligibleForExam(attendance, marks);
  