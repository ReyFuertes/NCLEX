import { Injectable } from '@angular/core';
import { ElearningModel } from '../models/elearning.model';

@Injectable()
export class ElearningService {
  private title$: string = "CHECK OUT OUR ELEARNING SAMPLES"
  private buttonText$: string = "SHOW MORE"
  private elearnings$: ElearningModel[] = new Array(8).fill(true).map((e, i) => ({
    id: "1",
    imageUrl: `https://picsum.photos/400/300?${i}`
  }))

  constructor() { }

  getTitle(): string {
    return this.title$
  }

  getButtonText(): string {
    return this.buttonText$
  }

  getElearnings(): ElearningModel[] {
    return this.elearnings$
  }

}
