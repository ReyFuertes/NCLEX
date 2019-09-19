import { Injectable } from '@angular/core';
import { RegistrationFormModel } from '../models/registration-form.model';

@Injectable()
export class RegistrationService {
  private title$: string = "IMPROVE NCLEX-RN SCORES AT YOUR ORGANIZATION BY PARTNERING WITH NCLEX EXPERTACADEMY."
  private subtitle$: string = "It doesn't matter whether you are taking the NCLEX-RN for the first time, if you are repeating it, or if your are an international student. NCLEX ExpertAcademy can adapt to your requirements."

  constructor() { }
  
  getTitle(): string {
    return this.title$
  }

  getSubtitle(): string {
    return this.subtitle$
  }

  submitForm(formData: RegistrationFormModel): void {
    alert(JSON.stringify(formData, null, 2))
  }

}
