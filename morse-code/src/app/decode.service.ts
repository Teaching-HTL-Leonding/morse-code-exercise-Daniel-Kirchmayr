import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecodeService {

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

  decodeFromMorse(inputText: string): string {
    const words = inputText.split('/').map(word => word.trim());
    const decodedText = words.map(word => {
      return word.split(' ').map(char => {
        return Object.keys(this.morseCode).find(key => this.morseCode[key] === char) || '';
      }).join('');
    }).join(' ');

    return decodedText;
  }

  constructor() { }
}
