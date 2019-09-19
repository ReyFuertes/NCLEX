import { Injectable } from '@angular/core';
import { FeatureModel } from '../models/feature.model';

@Injectable()
export class FeatureService {
  private title$: string = "What makes Expertbanks stand out from the rest?"
  private features$: FeatureModel[] = [
    {
      id: "1",
      title: `Stay up-to-date effortlessly`,
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
      imageUrl: "https://picsum.photos/400?1"
    },
    {
      id: "2",
      title: `In-depth explanations`,
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
      imageUrl: "https://picsum.photos/400?2"
    },
    {
      id: "3",
      title: `Simple conclusions`,
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
      imageUrl: "https://picsum.photos/400?3"
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title$
  }

  getFeatures(): FeatureModel[] {
    return this.features$
  }
}
