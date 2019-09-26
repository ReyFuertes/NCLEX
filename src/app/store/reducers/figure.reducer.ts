import { LoadFigureList, LoadFigureListSuccess, LoadFigureListFailure } from '../actions/figure.action';
import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { FigureModel } from 'src/app/models/figure.model';

export interface FigureState {
  list: FigureModel[],
  isFetchingList: boolean,
  error: any
}

const initialState: FigureState = {
  list: [],
  isFetchingList: false,
  error: null
};

const _figureReducer = createReducer(
  initialState,

  on(
    LoadFigureList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadFigureListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadFigureListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),
)

export function FigureReducer(state, action) {
  return _figureReducer(state, action)
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
