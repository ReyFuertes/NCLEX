import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { HeroModel } from 'src/app/models/hero.model';
import { UniversityModel } from 'src/app/models/university.model';
import { UniversityService } from 'src/app/services/university.service';
import { PreparationService } from '../../services/preparation.service';
import { PreparationModel } from '../../models/preparation.model';
import { ImprovementService } from '../../services/improvement.service';
import { ImprovementModel } from '../../models/improvement.model';
import { InnovationModel } from '../../models/innovation.model';
import { InnovationService } from '../../services/innovation.service';
import { TestimonialService } from 'src/app/services/testimonial.service';
import { TestimonialModel } from 'src/app/models/testimonial.model';

@Component({
  selector: 'app-nclex-container',
  templateUrl: './nclex-container.component.html',
  styleUrls: ['./nclex-container.component.scss']
})
export class NclexContainerComponent implements OnInit {
  hero: HeroModel

  universities: UniversityModel[]

  preparationTitle: string
  preparationImageUrl: string
  preparations: PreparationModel[]

  improvementTitle: string
  improvementSubtitle: string
  improvements: ImprovementModel[]

  innovationTitle: string
  innovationSubtitle: string
  innovationImageUrl: string
  innovations: InnovationModel[]

  testimonialTitle: string
  testimonials: TestimonialModel[]

  constructor(
    private heroService$: HeroService,
    private universityService$: UniversityService,
    private preparationService$: PreparationService,
    private improvementService$: ImprovementService,
    private innovationService$: InnovationService,
    private testimonialService$: TestimonialService
  ) { }

  ngOnInit() {
    this.getHero()
    this.getUniversities()
    this.getPreparations()
    this.getImprovements()
    this.getInnovations()
    this.getTestimonials()
  }

  getHero(): void {
    this.hero = this.heroService$.getHero('nclex')
  }

  getUniversities(): void {
    this.universities = this.universityService$.getUniversities()
  }

  getPreparations(): void {
    this.preparationTitle = this.preparationService$.getTitle()
    this.preparationImageUrl = this.preparationService$.getImageUrl()
    this.preparations = this.preparationService$.getPreparations()
  }

  getImprovements(): void {
    this.improvementTitle = this.improvementService$.getTitle()
    this.improvementSubtitle = this.improvementService$.getSubtitle()
    this.improvements = this.improvementService$.getImprovements()
  }

  getInnovations(): void {
    this.innovationTitle = this.innovationService$.getTitle()
    this.innovationSubtitle = this.innovationService$.getSubtitle()
    this.innovationImageUrl = this.innovationService$.getImageUrl()
    this.innovations = this.innovationService$.getInnovations()
  }

  getTestimonials(): void {
    this.testimonialTitle = this.testimonialService$.getTitle()
    this.testimonials = this.testimonialService$.getTestimonials()
  }

}
