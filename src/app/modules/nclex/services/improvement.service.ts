import { Injectable } from '@angular/core';
import { ImprovementModel } from '../models/improvement.model';

@Injectable()
export class ImprovementService {
  private title: string = "HAVING GREAT QUESTIONS ISN'T ENOUGH TO ACE THE NCLEX-RN. SAY HELLO TO A FULLY ADAPTIVE, INNOVATIVE WAY OF STUDYING."
  private subtitle: string = `We have harnessed the "testing effect" and continuously update our exams to include techniques such as learning science, benchmarking, and customized testing to create an adaptive, efficient learning platform.`
  private improvements: ImprovementModel[] = [
    {
      id: "1",
      title: "WE HAVE CREATED A MORE EFFICIENT LEARNING PLATFORM!",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      imageUrl: "https://picsum.photos/400?1"
    },
    {
      id: "2",
      title: "NCLEX EXPERTACADEMY USES EVIDENCE-BASED SCIENCE TO IMPROVE TESTING PERFORMANCE.",
      description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
      imageUrl: "https://picsum.photos/400?2"
    },
    {
      id: "3",
      title: "NCLEX EXPERTACADEMY RELIES ON SCIENTIFIC RESEARCH TO HELP YOU TEST BETTER",
      description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      imageUrl: "https://picsum.photos/400?3"
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title
  }

  getSubtitle(): string {
    return this.subtitle
  }

  getImprovements(): ImprovementModel[] {
    return this.improvements
  }
}
