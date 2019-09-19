import { Injectable } from '@angular/core';
import { PreparationModel } from '../models/preparation.model';

@Injectable()
export class PreparationService {
  private title: string = "THE FIRST STEP TO DOING GREAT ON YOUR NCLEX-RN IS TO PREPARE EFFICIENTLY BEFORE EXAM DAY"
  private imageUrl: string = "https://picsum.photos/400?preparations"
  private preparations: PreparationModel[] = [
    {
      id: "1",
      title: "WE FOLLOW A STRICT PROCESS EACH TIME WE DEVELOP NEW QUESTIONS",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
      id: "2",
      title: "WE TAKE YOUR FEEDBACK SERIOUSLY",
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.`
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title
  }

  getImageUrl(): string {
    return this.imageUrl
  }

  getPreparations(): PreparationModel[] {
    return this.preparations
  }

}
