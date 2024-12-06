function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printSquaresOfFirst10Primes() {
    let primes = [];
    let num = 2;

    while (primes.length < 10) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    primes.forEach(prime => {
        console.log(Square of ${prime} is ${prime * prime});
    });
}

printSquaresOfFirst10Primes();