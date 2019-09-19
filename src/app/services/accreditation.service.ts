import { Injectable } from '@angular/core';
import { AccreditationModel } from '../models/accreditation.model';

@Injectable()
export class AccreditationService {
  private title$: string = "Our Accreditation"
  private accreditations$: AccreditationModel[] = [
    {
      id: "1",
      imageUrl: "./assets/images/global/accreditations/corexcel_logo.png",
    },
    {
      id: "2",
      imageUrl: "./assets/images/global/accreditations/ancc_logo.png",
    },
    {
      id: "3",
      imageUrl: "./assets/images/global/accreditations/ap_logo.png",
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title$
  }

  getAccreditations(): AccreditationModel[] {
    return this.accreditations$
  }
}
