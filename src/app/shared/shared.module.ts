import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { UniversityCarouselComponent } from './components/university-carousel/university-carousel.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { InstitutionSectionComponent } from './components/institution-section/institution-section.component';
import { AccreditationSectionComponent } from './components/accreditation-section/accreditation-section.component';
import { ExpertbankSectionComponent } from './components/expertbank-section/expertbank-section.component';
import { FigureSectionComponent } from './components/figure-section/figure-section.component';
import { ElearningSectionComponent } from './components/elearning-section/elearning-section.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { RegistrationSectionComponent } from './components/registration-section/registration-section.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { SubscriptionSectionComponent } from './components/subscription-section/subscription-section.component';
import { FooterNavigationComponent } from './components/footer-navigation/footer-navigation.component';
import { HeroService } from '../services/hero.service';
import { InstitutionService } from '../services/institution.service';
import { UniversityService } from '../services/university.service';
import { AccreditationService } from '../services/accreditation.service';
import { ExpertbankService } from '../services/expertbank.service';
import { FigureService } from '../services/figure.service';
import { ElearningService } from '../services/elearning.service';
import { NewsService } from '../services/news.service';
import { TestimonialService } from '../services/testimonial.service';
import { RegistrationService } from '../services/registration.service';
import { SubscriptionService } from '../services/subscription.service';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
];

const bootstrapModules = [
  NgbModule
]

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderNavigationComponent,
    FooterNavigationComponent,
    UniversityCarouselComponent,
    HeroSectionComponent,
    InstitutionSectionComponent,
    AccreditationSectionComponent,
    ExpertbankSectionComponent,
    FigureSectionComponent,
    ElearningSectionComponent,
    NewsSectionComponent,
    RegistrationSectionComponent,
    TestimonialSectionComponent,
    SubscriptionSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...materialModules,
    ...bootstrapModules
  ],
  exports: [
    PageNotFoundComponent,
    HeaderNavigationComponent,
    FooterNavigationComponent,
    UniversityCarouselComponent,
    HeroSectionComponent,
    InstitutionSectionComponent,
    AccreditationSectionComponent,
    ExpertbankSectionComponent,
    FigureSectionComponent,
    ElearningSectionComponent,
    NewsSectionComponent,
    RegistrationSectionComponent,
    TestimonialSectionComponent,
    SubscriptionSectionComponent
  ],
  providers: [
    HeroService,
    UniversityService,
    InstitutionService,
    AccreditationService,
    ExpertbankService,
    FigureService,
    ElearningService,
    NewsService,
    TestimonialService,
    RegistrationService,
    SubscriptionService
  ],
  entryComponents: [

  ]
})
export class SharedModule { }
