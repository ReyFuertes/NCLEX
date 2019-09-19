import { Injectable } from '@angular/core';
import { PerformanceModel } from '../models/performance.model';

@Injectable()
export class PerformanceService {
  private performance$: PerformanceModel = {
    id: "1",
    title: "Our exam score data allows you to compare your NCLEX-RN performance to your peers",
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
    imageUrl: "https://picsum.photos/800?1"
  }

  constructor() { }

  getPerformance(): PerformanceModel {
    return this.performance$
  }

}
