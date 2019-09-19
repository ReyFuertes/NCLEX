export interface GoalModel {
  id: string,
  niche: string,
  list: GoalList[]
}

export interface GoalList {
  id: string,
  description: string
}