import { Injectable } from '@angular/core';

@Injectable()
export class PracticeService {
  private title$: string = "ExpertAcademy allows you to simulate the environment that you will experience on the day of your NCLEX-RN. This can help predict how you will perform under similar conditions. Our realistic test experience provides an accurate representation of the test you have to take."

  constructor() { }

  getTitle(): string {
    return this.title$
  }

  clickPractice(): void {
    alert('/pricing')
  }

}
