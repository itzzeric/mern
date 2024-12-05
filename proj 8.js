// Loop through the alphabet, from 1 to 26 (representing A to Z)
for (let i = 1; i <= 26; i++) {
    // Check if the number is odd
    if (i % 2 !== 0) {
        // Convert the number to a letter (A = 1, B = 2, ..., Z = 26)
        let letter = String.fromCharCode(64 + i); // ASCII value of 'A' is 65, so 64 + i gives correct letter
        console.log(letter);
    }
}
