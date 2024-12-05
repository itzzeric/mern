// Function to perform operations and track repeated results
function processNumbers() {
  let results = []; // To store the final results
  let resultCount = {}; // To count the frequency of each result
  let repeatedResults = []; // To store repeated results

  for (let num = 1; num <= 100; num++) {
    let result = num;

    // Multiply by 5 if number is a multiple of 2
    if (num % 2 === 0) {
      result *= 5;
    }

    // Divide by 3 if number is a multiple of 3
    if (num % 3 === 0) {
      result = result / 3;
    }

    // Store the result in the results array
    results.push(result);

    // Track the frequency of the result
    resultCount[result] = (resultCount[result] || 0) + 1;
  }

  // Identify repeated results (more than one occurrence)
  for (let key in resultCount) {
    if (resultCount[key] > 1) {
      repeatedResults.push(key);
    }
  }

  // Output the repeated results
  console.log("Repeated results after both operations:");
  console.log(repeatedResults);
}

// Run the function
processNumbers();
