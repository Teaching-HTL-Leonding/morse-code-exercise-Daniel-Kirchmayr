import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncodeService {

  readonly morseCode: { [key: string]: string } = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
  };


  encodeToMorse(plainText: string): string {
    plainText = plainText.toUpperCase().trim();
    if (!/^[A-Z\s]*$/.test(plainText)) {
      return 'Error: Input must only contain uppercase letters A-Z and spaces.';
    }

    const normalizedText = plainText.replace(/\s+/g, ' ');
    const morseCode = normalizedText.split(' ').map(word =>
      word.split('').map(char => this.morseCode[char] || '').join(' ')
    ).join(' / ');

    return morseCode;
  }
}
