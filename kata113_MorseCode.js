// ======================== Decode the Morse Code ===============

// The Morse code is case-insensitive, traditionally capital letters are used.
// When the message is written in Morse code, a single space is used to separate
// the character codes and 3 spaces are used to separate words.

const MORSE_CODE = { '-.-.--': '!',
                    '.-..-.': '"',
                    '...-..-': '$',
                    '.-...': '&',
                    '.----.': '\'',
                    '-.--.': '(',
                    '-.--.-': ')',
                    '.-.-.': '+',
                    '--..--': ',',
                    '-....-': '-',
                    '.-.-.-': '.',
                    '-..-.': '/',
                    '-----': '0',
                    '.----': '1',
                    '..---': '2',
                    '...--': '3',
                    '....-': '4',
                    '.....': '5',
                    '-....': '6',
                    '--...': '7',
                    '---..': '8',
                    '----.': '9',
                    '---...': ':',
                    '-.-.-.': ';',
                    '-...-': '=',
                    '..--..': '?',
                    '.--.-.': '@',
                    '.-': 'A',
                    '-...': 'B',
                    '-.-.': 'C',
                    '-..': 'D',
                    '.': 'E',
                    '..-.': 'F',
                    '--.': 'G',
                    '....': 'H',
                    '..': 'I',
                    '.---': 'J',
                    '-.-': 'K',
                    '.-..': 'L',
                    '--': 'M',
                    '-.': 'N',
                    '---': 'O',
                    '.--.': 'P',
                    '--.-': 'Q',
                    '.-.': 'R',
                    '...': 'S',
                    '-': 'T',
                    '..-': 'U',
                    '...-': 'V',
                    '.--': 'W',
                    '-..-': 'X',
                    '-.--': 'Y',
                    '--..': 'Z',
                    '..--.-': '_',
                    '...---...': 'SOS' }

// const decodeMorse = morseCode => {
//   const morseCodeSplit = morseCode.split('   ').map(word => word.split(' '));
//   return morseCodeSplit.map(word => word.map(char => MORSE_CODE[char]).join``).join` `.trim();
// }

// decodeMorse = function(morseCode){
//   return morseCode.trim().split(' ').map(a => MORSE_CODE[a] || ' ').join('').replace(/\s+/g, ' ');
// }

// decodeMorse = morseCode => morseCode.trim().replace(/([\.-]+)??/g, (_, c) => MORSE_CODE[c]);


// decodeMorse = function(morseCode){
//   return morseCode
//   .trim()
//   .split(/  | /)
//   .map((code) => MORSE_CODE[code] || ' ')
//   .join('');
// }

const decodeMorse = morseCode => morseCode.split('   ').map(word => word.split(' ').map(char => MORSE_CODE[char]).join``).join` `;

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))


// ====================================== Decode Morse code, advanced ====================

// "Dot" – is 1 time unit long.
// "Dash" – is 3 time units long.
// Pause between dots and dashes in a character – is 1 time unit long.
// Pause between characters inside a word – is 3 time units long.
// Pause between words – is 7 time units long.
// if the line is connected (the key at the remote station is down), 1 is recorded
// if the line is not connected (remote key is up), 0 is recorded. A

const decodeBits = (bits,rate) => {
  bits = bits.replace(/^0+|0+$/g,'');
  !(bits.match(/0/g)) ? rate = bits.length : rate = Math.min(...bits.match(/0+|1+/g).map(pause => pause.length));
  return rate === 1 ? replace2Morse(bits) : replace2Morse(bits.replace(new RegExp('0{' + rate + '}','g'),'0').replace(new RegExp('1{' + rate + '}','g'),'1'));
}

const replace2Morse = str => str.replace(/0000000/g, '   ').replace(/111/g, '-').replace(/000/g, ' ').replace(/1/g, '.').replace(/0/g, '');

// const decodeMorse = morseCode => morseCode.split('   ').map(word => word.split(' ').map(char => MORSE_CODE[char]).join``).join` `;

// console.log(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')));
// console.log(decodeMorse(decodeBits('10001')));
// console.log(decodeMorse(decodeBits('01110')));
// console.log(decodeMorse(decodeBits('111110000011111')));
// console.log(decodeMorse(decodeBits('11111100111111')));
// console.log(decodeMorse(decodeBits('00011100010101010001000000011101110101110001010111000101000111010111010001110101110000000111010101000101110100011101110111000101110111000111010000000101011101000111011101110001110101011100000001011101110111000101011100011101110001011101110100010101000000011101110111000101010111000100010111010000000111000101010100010000000101110101000101110001110111010100011101011101110000000111010100011101110111000111011101000101110101110101110')));
// console.log(decodeMorse(decodeBits('11111111111111100000000000000011111000001111100000111110000011111000000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000001111100000111111111111111000000000000000111110000011111000001111111111111110000000000000001111100000111110000000000000001111111111111110000011111000001111111111111110000011111000000000000000111111111111111000001111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000111110000000000000001111100000111111111111111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111111111111111000001111111111111110000000000000001111111111111110000011111000000000000000000000000000000000001111100000111110000011111111111111100000111110000000000000001111111111111110000011111111111111100000111111111111111000000000000000111111111111111000001111100000111110000011111111111111100000000000000000000000000000000000111110000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111111111111100000000000000011111111111111100000111111111111111000000000000000111110000011111111111111100000111111111111111000001111100000000000000011111000001111100000111110000000000000000000000000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111000001111111111111110000000000000001111100000000000000011111000001111111111111110000011111000000000000000000000000000000000001111111111111110000000000000001111100000111110000011111000001111100000000000000011111000000000000000000000000000000000001111100000111111111111111000001111100000111110000000000000001111100000111111111111111000000000000000111111111111111000001111111111111110000011111000001111100000000000000011111111111111100000111110000011111111111111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111111111111110000011111111111111100000111110000000000000001111100000111111111111111000001111100000111111111111111000001111100000111111111111111')));
// ···· · −·−−   ·−−− ··− −·· ·

// encoded.match(new RegExp('.{1,' + divisor + '}','g'));

// var decodeBits = function(bits){
//   // ToDo: Accept 0's and 1's, return dots, dashes and spaces
//   return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
// }

// var decodeMorse = function(morseCode){
//   // ToDo: Accept dots, dashes and spaces, return human-readable message
//   return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
// }

// const decodeBits = bits => {
//   let rate = 1;
//   bits = bits.replace(/^0+|0+$/g,'');
//   if (!bits.match(/0/g)) { // case no 0s
//     rate = bits.length;
//   } else { // case 2 0s or more
//     const auxRate = bits.match(/0+/g).map(pause => pause.length);
//     rate = Math.min(...auxRate);
//   }
//   if (rate === 1 || (bits.length % rate)) bits = bits.replace(/0000000/g, '   ').replace(/111/g, '-').replace(/000/g, ' ').replace(/1/g, '.').replace(/0/g, '');
//   if (rate > 1) bits = bits.replace(new RegExp('0{' + rate + '}','g'),'0').replace(new RegExp('1{' + rate + '}','g'),'1');
//   return bits.replace(/0000000/g, '   ').replace(/111/g, '-').replace(/000/g, ' ').replace(/1/g, '.').replace(/0/g, '');
// }

// const decodeBits = bits => {
//   let rate = 0;
//   bits = bits.replace(/^0+|0+$/g,''); // trailing 0s
//   !(bits.match(/0/g)) ? rate = bits.length : rate = Math.min(...bits.match(/0+/g).map(pause => pause.length));
//   if (rate === 1 || bits.length % rate) return replaceHelper(bits);
//   if (rate > 1) return replaceHelper(bits.replace(new RegExp('0{' + rate + '}','g'),'0').replace(new RegExp('1{' + rate + '}','g'),'1'));
// }

// const replaceHelper = str => str.replace(/0000000/g, '   ').replace(/111/g, '-').replace(/000/g, ' ').replace(/1/g, '.').replace(/0/g, '');

// const decodeMorse = morseCode => {
//   const morseCodeSplit = morseCode.split('   ').map(word => word.split(' '));
//   return morseCodeSplit.map(word => word.map(char => MORSE_CODE[char]).join``).join` `.trim();
// }

// var c=0;
// var arr=['HEY JUDE',"E","I","EE",'A','M','E','E','I','I','M','E','E','THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.','THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.']
// decodeBits=()=>""
// decodeMorse=()=>arr[c++];