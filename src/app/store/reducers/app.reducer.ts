import { AppActions } from '../actions/app.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface AppState {
}

const initialState: AppState = {
};

export function AppReducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    default:
      return state;
  }
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

