import { Injectable } from '@angular/core';
import { SubscriptionFormModel } from '../models/subscription-form.model';

@Injectable()
export class SubscriptionService {
  private title$: string = "SUBSCRIBE TO OUR NEWSLETTERS TO GET UPDATES!"

  constructor() { }
  
  getTitle(): string {
    return this.title$
  }

  submitForm(formData: SubscriptionFormModel): void {
    alert(JSON.stringify(formData, null, 2))
  }

}
