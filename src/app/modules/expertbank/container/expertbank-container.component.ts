import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { AdvantageModel } from '../models/advantage.model';
import { AdvantageService } from '../services/advantage.service';
import { FeatureModel } from '../models/feature.model';
import { FeatureService } from '../services/feature.service';
import { PerformanceModel } from '../models/performance.model';
import { PerformanceService } from '../services/performance.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { RegistrationFormModel } from 'src/app/models/registration-form.model';
import { PracticeService } from '../services/practice.service';

@Component({
  selector: 'app-expertbank-container',
  templateUrl: './expertbank-container.component.html',
  styleUrls: ['./expertbank-container.component.scss']
})
export class ExpertbankContainerComponent implements OnInit {
  hero: HeroModel

  advantageTitle: string
  advantages: AdvantageModel[]

  featureTitle: string
  features: FeatureModel[]

  performance: PerformanceModel

  registrationTitle: string
  registrationSubtitle: string

  practiceTitle: string

  constructor(
    private heroService$: HeroService,
    private advantageService$: AdvantageService,
    private featureService$: FeatureService,
    private performanceService$: PerformanceService,
    private registrationService$: RegistrationService,
    private practiceService$: PracticeService
  ) { }

  ngOnInit() {
    this.getHero()
    this.getAdvantages()
    this.getFeatures()
    this.getPerformance()
    this.getPractice()
  }

  getHero(): void {
    this.hero = this.heroService$.getHero('expertbanks')
  }

  getAdvantages(): void {
    this.advantageTitle = this.advantageService$.getTitle()
    this.advantages = this.advantageService$.getAdvantages()
  }

  getFeatures(): void {
    this.featureTitle = this.featureService$.getTitle()
    this.features = this.featureService$.getFeatures()
  }

  getPerformance(): void {
    this.performance = this.performanceService$.getPerformance()
  }

  getRegistration(): void {
    this.registrationTitle = this.registrationService$.getTitle()
    this.registrationSubtitle = this.registrationService$.getSubtitle()
  }

  handleSubmitRegistrationForm(formData: RegistrationFormModel) {
    this.registrationService$.submitForm(formData)
  }

  getPractice(): void {
    this.practiceTitle = this.practiceService$.getTitle()
  }

  handleClickPractice(): void {
    this.practiceService$.clickPractice()
  }

}
