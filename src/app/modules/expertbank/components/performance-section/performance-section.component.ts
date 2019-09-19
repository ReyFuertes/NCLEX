import { Component, OnInit, Input } from '@angular/core';
import { PerformanceModel } from '../../models/performance.model';

@Component({
  selector: 'app-performance-section',
  templateUrl: './performance-section.component.html',
  styleUrls: ['./performance-section.component.scss']
})
export class PerformanceSectionComponent implements OnInit {
  @Input() performance: PerformanceModel

  constructor() { }

  ngOnInit() {
  }

}
