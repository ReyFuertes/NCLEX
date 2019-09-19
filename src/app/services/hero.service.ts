import { Injectable } from '@angular/core';
import { HeroModel } from '../models/hero.model';

@Injectable()
export class HeroService {

  private hero$: HeroModel = {
    id: "1",
    title: "Test NCLEX-RN better",
    subtitle: "A new, evidence-based perspective on NCLEX-RN preparation",
    buttonText: "Get started for free!",
    imageUrl: "./assets/images/home/hero_section.png",
    showButton: true
  }

  constructor() {
  }

  getHero(page: string): HeroModel {
    return {
      ...this.hero$,
      imageUrl: `${this.hero$.imageUrl}?${page}`
    }
  }
}
