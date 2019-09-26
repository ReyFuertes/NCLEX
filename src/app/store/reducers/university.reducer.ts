import { LoadUniversityList, LoadUniversityListSuccess, LoadUniversityListFailure } from '../actions/university.action';
import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { UniversityModel } from 'src/app/models/university.model';

export interface UniversityState {
  list: UniversityModel[],
  isFetchingList: boolean,
  error: any
}

const initialState: UniversityState = {
  list: [],
  isFetchingList: false,
  error: null
};

const _universityReducer = createReducer(
  initialState,

  on(
    LoadUniversityList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadUniversityListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadUniversityListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),
)

export function UniversityReducer(state, action) {
  return _universityReducer(state, action)
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
