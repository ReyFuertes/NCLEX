import { Injectable } from '@angular/core';
import { PlanPackageModel, PlanModel } from '../models/plan.model';

@Injectable()
export class PlanService {
  title: string = "You can save money with our bundles!"
  subtitle: string = "Choose your NCLEX-RN ExpertBanks subscription length"
  checkIconUrl: string  = "https://picsum.photos/30"
  buttonText: string = "SUBSCRIBE"
  plans: PlanModel[] = [
    {
      id: "1",
      timespan: "1 Month",
      price: "FREE",
      discount: "",
      details: "NCLEX-RN Question Bank + Assessment Questions",
      packages: [
        {
          id: "1",
          description: "2019 Edition"
        },
        {
          id: "2",
          description: "More than 1000+ NCSBN Formatted Items"
        },
        {
          id: "3",
          description: "Activate When You're Ready"
        }
      ]
    },
    {
      id: "2",
      timespan: "3 Months",
      price: "$200",
      discount: "",
      details: "NCLEX-RN Question Bank + Assessment Questions",
      packages: [
        {
          id: "1",
          description: "2019 Edition"
        },
        {
          id: "2",
          description: "More than 5000+ NCSBN Formatted Items"
        },
        {
          id: "3",
          description: "Activate When You're Ready"
        }
      ]
    },
    {
      id: "3",
      timespan: "6 Months",
      price: "$250",
      discount: "Save $50/month",
      details: "NCLEX-RN Question Bank + Assessment Questions",
      packages: [
        {
          id: "1",
          description: "2019 Edition"
        },
        {
          id: "2",
          description: "More than 5000+ NCSBN Formatted Items"
        },
        {
          id: "3",
          description: "Activate When You're Ready"
        }
      ]
    },
    {
      id: "4",
      timespan: "12 Months",
      price: "$300",
      discount: "Save $50/month",
      details: "NCLEX-RN Question Bank + Assessment Questions",
      packages: [
        {
          id: "1",
          description: "2019 Edition"
        },
        {
          id: "2",
          description: "More than 1000+ NCSBN Formatted Items"
        },
        {
          id: "3",
          description: "Activate When You're Ready"
        }
      ]
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title
  }

  getSubtitle(): string {
    return this.subtitle
  }

  getCheckIconUrl(): string {
    return this.checkIconUrl
  }

  getButtonText(): string {
    return this.buttonText
  }

  getPlans(): PlanModel[] {
    return this.plans
  }

}
