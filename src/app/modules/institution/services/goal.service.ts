import { Injectable } from '@angular/core';
import { GoalModel } from '../models/goal.model';

@Injectable()
export class GoalService {
  private title: string = "Help your students reach their goals and improve your program"
  private avatarUrl: string = "https://picsum.photos/400?1"
  private checkIconUrl: string = "https://picsum.photos/30?2"
  private goals: GoalModel[] = [
    {
      id: "1",
      niche: "Faculty and Staff",
      list: [
        {
          id: "1",
          description: "Data analysis and performance prediction for individual student and classes"
        },
        {
          id: "2",
          description: "Our system helps you understand the study habits and testing performance of students who have lower scores"
        },
        {
          id: "3",
          description: "Customized, adaptive exams that simulate real exams and determine how a student's performance will tranlate to the NCLEX-RN"
        }
      ]
    },
    {
      id: "2",
      niche: "Nursing students and professionals",
      list: [
        {
          id: "1",
          description: "Who have thousands of questions and learning materials available to improve your testing performance"
        },
        {
          id: "2",
          description: "Do you get nervous befor a big exam? Our realistic testing platform can help you reduce your anxiety and make your feel more confident on exam day"
        },
        {
          id: "3",
          description: "Our system identifies your weakest areas and reinforces the subjects that you need to improve on"
        }
      ]
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title
  }

  getAvatarUrl(): string {
    return this.avatarUrl
  }

  getCheckIconUrl(): string {
    return this.checkIconUrl
  }

  getGoals(): GoalModel[] {
    return this.goals
  }

}
