import { Injectable } from '@angular/core';
import { FaqModel } from '../models/faq.model';

@Injectable()
export class FaqService {
  private faqs$: FaqModel[] = []

  constructor() {
    const categories = ['NCLEX-RN', 'Technical Questions', 'Using Your Subscription', 'Purchase and Refunds', 'Subscription Activation and Renewal']
    const generateMockCategories = categories.reduce(
      (list, currentCategory) => [
        ...list,
        ...(new Array(5).fill(true).map((e, index) => ({
          id: index,
          question: "Where does it come from Lorem Ipsum is not simply random text ?",
          answer: "I don't know",
          category: currentCategory
        })))
      ], [])
    this.faqs$ = generateMockCategories
  }

  getFaqs(): FaqModel[] {
    return this.faqs$
  }
}
