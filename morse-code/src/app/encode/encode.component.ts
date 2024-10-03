import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EncodeService } from '../encode.service';

@Component({
  selector: 'app-encode',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './encode.component.html',
  styleUrl: './encode.component.css'
})
export class EncodeComponent {
  encodeInput = signal('');
  encodeOutput = signal('');
  errorMessages = signal('');

  private encodeService = inject(EncodeService);

  constructor() {}

  isValidPlainText(inputText: string): boolean {
    return !/^[A-Z\s]*$/.test(inputText.toUpperCase()) ? false : true;
  }

  encode() {
    const inputText = this.encodeInput();

    try {
      const encodedText = this.encodeService.encodeToMorse(inputText);
      this.encodeOutput.set(encodedText);
      this.errorMessages.set('');
    } catch (error) {
      this.errorMessages.set((error as Error).message);
      this.encodeOutput.set('');
    }
  }
}
