import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plan.service';
import { PlanModel } from '../../models/plan.model';

@Component({
  selector: 'app-pricing-container',
  templateUrl: './pricing-container.component.html',
  styleUrls: ['./pricing-container.component.scss']
})
export class PricingContainerComponent implements OnInit {
  planTitle: string
  planSubtitle: string
  planButtonText: string
  planCheckIconUrl: string
  plans: PlanModel[]

  constructor(
    private planService$: PlanService
  ) { }

  ngOnInit() {
    this.getPlans()
  }

  getPlans(): void {
    this.planTitle = this.planService$.getTitle()
    this.planSubtitle = this.planService$.getSubtitle()
    this.planButtonText = this.planService$.getButtonText()
    this.planCheckIconUrl = this.planService$.getCheckIconUrl()
    this.plans = this.planService$.getPlans()
  }

}
