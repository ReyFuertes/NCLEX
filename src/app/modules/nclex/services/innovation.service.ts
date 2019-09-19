import { Injectable } from '@angular/core';
import { InnovationModel } from '../models/innovation.model';

@Injectable()
export class InnovationService {
  private title: string = "AN INNOVATIVE LEARNING PLATFORM FOR THE NCLEX-RN"
  private subtitle: string = "OUR EXAMS CAN BE ADAPTIVE TO YOUR NEEDS SO THAT YOU CAN FOCUS ON YOUR WEAKEST SUBJECTS. THIS WAY, YOUR STUDY TIME WILL BE MORE EFFECTIVE THAN EVER!"
  private imageUrl: string = "https://picsum.photos/500?4"
  private innovations: InnovationModel[] = [
    {
      id: "1",
      title: "Customized exams"
    },
    {
      id: "2",
      title: "Exam style items"
    },
    {
      id: "3",
      title: "Realistic exam experience"
    },
    {
      id: "4",
      title: "Detailed explanations"
    },
    {
      id: "5",
      title: "Mobile interface"
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title
  }

  getSubtitle(): string {
    return this.subtitle
  }

  getImageUrl(): string {
    return this.imageUrl
  }

  getInnovations(): InnovationModel [] {
    return this.innovations
  }

}
