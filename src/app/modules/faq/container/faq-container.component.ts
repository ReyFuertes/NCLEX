import { Component, OnInit } from '@angular/core';
import { FaqModel, FaqGroupedByCategoryModel } from '../models/faq.model';
import { FaqService } from '../services/faq.service';
import groupBy from 'lodash/groupBy'

@Component({
  selector: 'app-faq-container',
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.scss']
})
export class FaqContainerComponent implements OnInit {
  faqs: FaqModel[]
  faqsGroupedByCategory: FaqGroupedByCategoryModel

  constructor(private faqService$: FaqService) { }

  ngOnInit() {
    this.getFaqs()
    this.groupFaqsByCategory()
  }

  getFaqs(): void {
    this.faqs = this.faqService$.getFaqs()
  }
  
  groupFaqsByCategory() {
    this.faqsGroupedByCategory = groupBy(this.faqs, 'category')
  }
}
