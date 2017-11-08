/* IMPORTS */
import * as net from 'net';

/* VARIABLES */
const socket = new net.Socket();
let msg = '';

/* FUNCTIONS */
// function chr(n) {
//   if (n < 128) {
//     return String.fromCharCode(n);
//   } else {
//     return "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "[n - 128];
//   }
// }

/* LOGIC */
// Looking Up
socket.on('lookup', () => {
  console.log('Looking up...');
});

// Connecting
socket.connect({host: 'go.shivera-global.net', port: 7171}, () => {
  console.log(`Connecting...`);
});

socket.setEncoding('utf8');

// Connected
socket.on('connect', () => {
  console.log('Connected!');
  const buff = new Buffer([0x06, 0x00, 0xFF, 0xFF, 0x69, 0x6E, 0x66, 0x6F]);
  socket.write(buff);
  // socket.write('\x06\x00\xFF\xFF\x69\x6E\x66\x6F');
  // console.log(`${socket.bufferSize}`);
  // console.log(`${socket.bytesRead}`);
  // console.log(`${socket.bytesWritten}`);
  // console.log(`${socket.bufferSize}`);
});

// Data Received
socket.on('data', (data) => {
  console.log('Received data!');
  msg += data.toString();
  // socket.destroy();
});


// Ended
socket.on('end', () => {
  console.log('Socket ended.');
  console.log(msg);
});

// Error
socket.on('error', (err) => {

  console.log(`ERROR! ${JSON.stringify(err)}`);
});

// Timed Out
socket.on('timeout', () => {
  console.log('Timed out.');
});
