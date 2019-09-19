import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { FigureService } from 'src/app/services/figure.service';
import { FigureModel } from 'src/app/models/figure.model';
import { AboutUsModel } from 'src/app/modules/about/models/about-us.model';
import { AboutUsService } from '../services/about-us.service';
import { MotivationModel } from '../models/motivation.model';
import { MotivationService } from '../services/motivation.service';
import { TestimonialModel } from 'src/app/models/testimonial.model';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.scss']
})
export class AboutContainerComponent implements OnInit {
  hero: HeroModel

  figures: FigureModel[]

  aboutUsList: AboutUsModel[]

  motivations: MotivationModel[]

  testimonialTitle: string
  testimonials: TestimonialModel[]

  constructor(
    private heroService$: HeroService,
    private figureService$: FigureService,
    private aboutUsService$: AboutUsService,
    private motivationService$: MotivationService,
    private testimonialService$: TestimonialService
  ) { }

  ngOnInit() {
    this.getHero()
    this.getFigures()
    this.getAboutUs()
    this.getMotivations()
    this.getTestimonials()
  }

  getHero(): void {
    this.hero = this.heroService$.getHero('about')
  }

  getFigures(): void {
    this.figures = this.figureService$.getFigures()
  }

  getAboutUs(): void {
    this.aboutUsList = this.aboutUsService$.getAboutUsList()
  }

  getMotivations(): void {
    this.motivations = this.motivationService$.getMotivations()
  }

  getTestimonials(): void {
    this.testimonialTitle = this.testimonialService$.getTitle()
    this.testimonials = this.testimonialService$.getTestimonials()
  }
}
