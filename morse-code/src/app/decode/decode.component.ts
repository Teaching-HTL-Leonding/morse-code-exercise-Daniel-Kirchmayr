import { Component, inject } from '@angular/core';
import { signal } from '@angular/core';
import { DecodeService } from '../decode.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-decode',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './decode.component.html',
  styleUrl: './decode.component.css'
})
export class DecodeComponent {
  decodeInput = signal('');
  decodeOutput = signal('');
  errorMessages = signal('');

  private decodeService = inject(DecodeService);

  constructor() {}

  isValidMorseCode(inputText: string): boolean {
    return !/^[.\-\/\s]*$/.test(inputText.trim()) ? false : true;
  }

  decode() {
    const inputText = this.decodeInput();

    try {
      const decodedText = this.decodeService.decodeFromMorse(inputText);
      this.decodeOutput.set(decodedText);
      this.errorMessages.set('');
    } catch (error) {
      this.errorMessages.set((error as Error).message);
      this.decodeOutput.set('');
    }
  }
}
