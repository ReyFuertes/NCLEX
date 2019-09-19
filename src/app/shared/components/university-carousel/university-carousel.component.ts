import { Component, ViewEncapsulation, OnInit, Input} from '@angular/core';
import { UniversityModel } from 'src/app/models/university.model';
import chunk from 'lodash/chunk'

@Component({
  encapsulation: ViewEncapsulation.None, // for scss reasons
  selector: 'app-university-carousel',
  templateUrl: './university-carousel.component.html',
  styleUrls: ['./university-carousel.component.scss']
})
export class UniversityCarouselComponent implements OnInit {
  @Input() universities: UniversityModel[];

  private itemPerSlide$: number = 5

  slides: []

  constructor() { }

  ngOnInit() {
    this.slides = chunk(this.universities, this.itemPerSlide$)
  }

}
