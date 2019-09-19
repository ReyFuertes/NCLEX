import { Injectable } from '@angular/core';
import { AdvantageModel } from '../models/advantage.model';

@Injectable()
export class AdvantageService {
  private title$: string = "What makes Expertbanks stand out from the rest?"
  private advantages$: AdvantageModel[] = [
    {
      id: "1",
      title: `All of our students get a "Digital Coach".`,
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
      imageUrl: "https://picsum.photos/400?1"
    },
    {
      id: "2",
      title: `Nobody wants to spend all their time studying.`,
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
      imageUrl: "https://picsum.photos/400?2"
    },
    {
      id: "3",
      title: `Exam simulation`,
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
      imageUrl: "https://picsum.photos/400?3"
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title$
  }

  getAdvantages(): AdvantageModel[] {
    return this.advantages$
  }
}
