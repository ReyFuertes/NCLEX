import { Action } from '@ngrx/store';

export enum UniversityActionTypes {
  LoadUniversity = '[University] Load University',
  LoadUniversitySuccess = '[University] Load University (success)'
}

export class LoadUniversity implements Action {
  readonly type = UniversityActionTypes.LoadUniversity;
}

export class LoadUniversitySuccess implements Action {
  readonly type = UniversityActionTypes.LoadUniversitySuccess;

  constructor(public payload: any) { }
}

export type UniversityActions = LoadUniversity | LoadUniversitySuccess;
