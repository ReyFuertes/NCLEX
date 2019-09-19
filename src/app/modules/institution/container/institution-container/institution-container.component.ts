import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { UniversityModel } from 'src/app/models/university.model';
import { UniversityService } from 'src/app/services/university.service';
import { WorkModel } from '../../models/work.model';
import { WorkService } from '../../services/work.service';
import { BenefitModel } from '../../models/benefit.model';
import { BenefitService } from '../../services/benefit.service';
import { RegistrationFormModel } from 'src/app/models/registration-form.model';
import { RegistrationService } from 'src/app/services/registration.service';
import { GoalService } from '../../services/goal.service';
import { GoalModel } from '../../models/goal.model';
import { SubscriptionFormModel } from 'src/app/models/subscription-form.model';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-institution-container',
  templateUrl: './institution-container.component.html',
  styleUrls: ['./institution-container.component.scss']
})
export class InstitutionContainerComponent implements OnInit {
  hero: HeroModel

  universities: UniversityModel[]

  workTitle: string
  workSubtitle: string
  works: WorkModel[]

  benefitTitle: string
  benefitCheckIconUrl: string
  benefits: BenefitModel[]

  registrationTitle: string
  registrationButtonText: string

  goalTitle: string
  goalAvatarUrl: string
  goalCheckIconUrl: string
  goals: GoalModel[]

  subscriptionTitle: string

  constructor(
    private heroService$: HeroService,
    private universityService$: UniversityService,
    private workService$: WorkService,
    private benefitService$: BenefitService,
    private registrationService$: RegistrationService,
    private goalService$: GoalService,
    private subscriptionService$: SubscriptionService
  ) { }

  ngOnInit() {
    this.getHero()
    this.getUniversities()
    this.getImprovements()
    this.getBenefits()
    this.getRegistration()
    this.getGoals()
    this.getSubscription()
  }

  getHero(): void {
    this.hero = this.heroService$.getHero('institution')
  }

  getUniversities(): void {
    this.universities = this.universityService$.getUniversities()
  }

  getImprovements(): void {
    this.workTitle = this.workService$.getTitle()
    this.workSubtitle = this.workService$.getSubtitle()
    this.works = this.workService$.getWorks()
  }

  getBenefits(): void {
    this.benefitTitle = this.benefitService$.getTitle()
    this.benefitCheckIconUrl = this.benefitService$.getCheckIconUrl()
    this.benefits = this.benefitService$.getBenefits()
  }

  getRegistration(): void {
    this.registrationTitle = "LET'S TALK"
    this.registrationButtonText = "TRY IT OUT!"
  }

  handleSubmitRegistrationForm(formData: RegistrationFormModel) {
    this.registrationService$.submitForm(formData)
  }

  getGoals(): void {
    this.goalTitle = this.goalService$.getTitle()
    this.goalAvatarUrl = this.goalService$.getAvatarUrl()
    this.goalCheckIconUrl = this.goalService$.getCheckIconUrl()
    this.goals = this.goalService$.getGoals()
  }

  getSubscription(): void {
    this.subscriptionTitle = this.subscriptionService$.getTitle()
  }

  handleSubmitSubscriptionForm(formData: SubscriptionFormModel) {
    this.subscriptionService$.submitForm(formData)
  }

}
