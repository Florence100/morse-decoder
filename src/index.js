const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    i = 0;
    let array = []
    while (i < expr.length) {
        array.push(expr.slice(i, i + 10))
        i += 10;
    }
    let decodeStr = '';
    for (let value of array) {
        while (value.startsWith('0')) {
            value = value.slice(1);          
        }
        let j = 0;
        let string = '';               
        while (j < value.length) {
            if (value.slice(j, j + 2) === '10') {
                string = string + '.';
            } else if (value.slice(j, j + 2) === '11') {
                string = string + '-';
            } else {
                string = string + ' ';
            }
            j += 2;
        }
        if (string in MORSE_TABLE) {
            decodeStr += MORSE_TABLE[string];
        } else decodeStr += ' ';
    }
    return(decodeStr)
    }

    
module.exports = {
    decode
}