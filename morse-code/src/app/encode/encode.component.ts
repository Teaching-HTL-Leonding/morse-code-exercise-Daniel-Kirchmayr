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

  private encodeService = inject(EncodeService);

  constructor() {}

  encode() {
    const inputText = this.encodeInput();
    const encodedText = this.encodeService.encodeToMorse(inputText);
    this.encodeOutput.set(encodedText);
  }
}
