import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// PLACEHOLDER: replace with the business WhatsApp number in international format, digits only (e.g. 2348012345678)
const WHATSAPP_NUMBER = '0000000000000';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  protected readonly topics = ['Order enquiry', 'Product question', 'Wholesale & collaborations', 'Something else'];

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    topic: [this.topics[0]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly submitted = signal(false);

  protected readonly whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Dina’s Allure! I have a question about your products.')}`;

  protected showError(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: send this.form.getRawValue() to a backend or form service (e.g. Firebase, Formspree)
    this.submitted.set(true);
    this.form.reset();
  }
}
