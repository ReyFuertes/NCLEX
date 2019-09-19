import { Injectable } from '@angular/core';
import { BenefitModel } from '../models/benefit.model';

@Injectable()
export class BenefitService {
  private title: string = "NCLEX ExpertAcademy benefits students, professionals, and faculty."
  private checkIconUrl: string = "https://picsum.photos/30"
  private benefits: BenefitModel[] = [
    {
      id: "1",
      description: "Exam scores increase significantly"
    },
    {
      id: "2",
      description: "Students and professionals can achieve their potential"
    },
    {
      id: "3",
      description: "Grades improve for the whole class"
    },
    {
      id: "4",
      description: "Your program will achieve a higher rating"
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title
  }

  getCheckIconUrl(): string {
    return this.checkIconUrl
  }

  getBenefits(): BenefitModel[] {
    return this.benefits
  }

}
