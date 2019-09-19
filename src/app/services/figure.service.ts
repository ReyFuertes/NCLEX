import { Injectable } from '@angular/core';
import { FigureModel } from '../models/figure.model';

@Injectable()
export class FigureService {
  private figures$: FigureModel[] = [
    {
      id: "1",
      total: "1.5M+",
      description: "STUDENTS AROUND THE WORLD",
      imageUrl: "https://picsum.photos/50?1"
    },
    {
      id: "2",
      total: "10M+",
      description: "MODULES ACTIVATED TO DATE",
      imageUrl: "https://picsum.photos/50?2"
    },
    {
      id: "3",
      total: "13M+",
      description: "COMPLETED INTERACTIVE ASSIGNMENTS IN PART 12 MONTHS",
      imageUrl: "https://picsum.photos/50?3"
    },
    {
      id: "4",
      total: "5K+",
      description: "INSTITUTIONS THAT USES OUR PRODUCT",
      imageUrl: "https://picsum.photos/50?4"
    },
  ]

  constructor() { }

  getFigures(): FigureModel[] {
    return this.figures$
  }

}
