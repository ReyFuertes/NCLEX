import { Component, OnInit, Input } from '@angular/core';
import { TestimonialModel } from 'src/app/models/testimonial.model';
import chunk from 'lodash/chunk'

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss']
})
export class TestimonialSectionComponent implements OnInit {
  @Input() title: string
  @Input() testimonials: TestimonialModel[]

  private itemPerSlide$: number = 2
  
  slides: []

  constructor() { }

  ngOnInit() {
    this.slides = chunk(this.testimonials, this.itemPerSlide$)
  }

}
