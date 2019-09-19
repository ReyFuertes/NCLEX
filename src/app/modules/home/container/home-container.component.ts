import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UniversityModel } from 'src/app/models/university.model';
import { UniversityService } from 'src/app/services/university.service';
import { HeroModel } from 'src/app/models/hero.model';
import { InstitutionModel } from 'src/app/models/institution.model';
import { AccreditationModel } from 'src/app/models/accreditation.model';
import { ExpertbankModel } from 'src/app/models/expertbank.model';
import { FigureModel } from 'src/app/models/figure.model';
import { ElearningModel } from 'src/app/models/elearning.model';
import { NewsModel } from 'src/app/models/news.model';
import { TestimonialModel } from 'src/app/models/testimonial.model';
import { SubscriptionFormModel } from 'src/app/models/subscription-form.model';
import { RegistrationFormModel } from 'src/app/models/registration-form.model';
import { HeroService } from 'src/app/services/hero.service';
import { InstitutionService } from 'src/app/services/institution.service';
import { AccreditationService } from 'src/app/services/accreditation.service';
import { ExpertbankService } from 'src/app/services/expertbank.service';
import { FigureService } from 'src/app/services/figure.service';
import { ElearningService } from 'src/app/services/elearning.service';
import { NewsService } from 'src/app/services/news.service';
import { TestimonialService } from 'src/app/services/testimonial.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  encapsulation: ViewEncapsulation.None, // for scss reasons
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  private readonly url$: string = '/assets/data/universities.json'

  errorMessage: string

  hero: HeroModel

  universities: UniversityModel[]

  institutions: InstitutionModel[]

  accreditations: AccreditationModel[]
  accreditationTitle: string

  exportbankTitle: string
  expertbankButtonText: string
  expertbanks: ExpertbankModel[]

  figures: FigureModel[]

  elearningTitle: string
  elearningButtonText: string
  elearnings: ElearningModel[]

  newsTitle: string
  newsList: NewsModel[]

  registrationTitle: string
  registrationSubtitle: string

  testimonialTitle: string
  testimonials: TestimonialModel[]

  subscriptionTitle: string

  constructor(
    private heroService$: HeroService,
    private universityService$: UniversityService,
    private institutionService$: InstitutionService,
    private accreditationService$: AccreditationService,
    private expertbankService$: ExpertbankService,
    private figureService$: FigureService,
    private elearningService$: ElearningService,
    private newsService$: NewsService,
    private testimonialService$: TestimonialService,
    private registrationService$: RegistrationService,
    private subscriptionService$: SubscriptionService
  ) { }

  ngOnInit() {
    this.getHero()
    this.getUniversities()
    this.getInstitutions()
    this.getAccreditations()
    this.getExpertbanks()
    this.getFigures()
    this.getElearnings()
    this.getNewsList()
    this.getRegistration()
    this.getTestimonials()
    this.getSubscription()
  }

  getHero(): void {
    this.hero = this.heroService$.getHero('home')
  }

  getUniversities(): void {
    // this.universityService$.getUniversities(this.url$).subscribe(
    //   universities => this.universities = universities,
    //   error => this.errorMessage = error
    // )
    this.universities = this.universityService$.getUniversities()
  }

  getInstitutions(): void {
    this.institutions = this.institutionService$.getInstitutions()
  }

  getAccreditations(): void {
    this.accreditationTitle = this.accreditationService$.getTitle()
    this.accreditations = this.accreditationService$.getAccreditations()
  }

  getExpertbanks(): void {
    this.exportbankTitle = this.expertbankService$.getTitle()
    this.expertbankButtonText = this.expertbankService$.getButtonText()
    this.expertbanks = this.expertbankService$.getExpertBanks()
  }

  getFigures(): void {
    this.figures = this.figureService$.getFigures()
  }

  getElearnings(): void {
    this.elearningTitle = this.elearningService$.getTitle()
    this.elearningButtonText = this.elearningService$.getButtonText()
    this.elearnings = this.elearningService$.getElearnings()
  }
  
  getNewsList(): void {
    this.newsTitle = this.newsService$.getTitle()
    this.newsList = this.newsService$.getNewsList()
  }

  getRegistration(): void {
    this.registrationTitle = this.registrationService$.getTitle()
    this.registrationSubtitle = this.registrationService$.getSubtitle()
  }

  handleSubmitRegistrationForm(formData: RegistrationFormModel) {
    this.registrationService$.submitForm(formData)
  }

  getTestimonials(): void {
    this.testimonialTitle = this.testimonialService$.getTitle()
    this.testimonials = this.testimonialService$.getTestimonials()
  }

  getSubscription(): void {
    this.subscriptionTitle = this.subscriptionService$.getTitle()
  }

  handleSubmitSubscriptionForm(formData: SubscriptionFormModel) {
    this.subscriptionService$.submitForm(formData)
  }
}
