import { UniversityActions } from '../actions/university.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface UniversityState {
}

const initialState: UniversityState = {
};

export function UniversityReducer(state: UniversityState = initialState, action: UniversityActions): UniversityState {
  switch (action.type) {
    default:
      return state;
  }
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

