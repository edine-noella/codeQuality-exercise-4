
//fibonacci : you add the two previous numbers to get the next number in the sequence

function fibonnacciSequenceOfN(n) {

    if (typeof n !== 'number' || n < 0) throw new Error('Invalid input');

    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    
    let sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]); 
    }
    
    return sequence;

    }

    console.log(fibonnacciSequenceOfN(5)); 

