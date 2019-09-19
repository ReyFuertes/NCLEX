export interface PlanModel {
  id: string,
  timespan: string,
  price: string,
  discount: string,
  details: string,
  packages: PlanPackageModel[]
}

export interface PlanPackageModel {
  id: string,
  description: string
}
