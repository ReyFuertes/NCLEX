import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { PerformancePropertyModel, PerformancePropertyFetchingModel } from '../../models/performance.model';
import { LoadPerformanceProperty, LoadPerformancePropertySuccess, LoadPerformancePropertyFailure } from '../actions/performance.action';

export interface PerformanceState {
  // property
  properties: PerformancePropertyModel,
  propertiesFetching: PerformancePropertyFetchingModel,
  propertiesError: PerformancePropertyModel
}

const initialState: PerformanceState = {
  // property
  properties: {
    title: '',
    imageUrl: '',
    description: ''
  },
  propertiesFetching: {
    title: false,
    imageUrl: false,
    description: false
  },
  propertiesError: {
    title: '',
    imageUrl: '',
    description: ''
  }
};

const _performanceReducer = createReducer(
  initialState,

  // property
  on(
    LoadPerformanceProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadPerformancePropertySuccess,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: false
      },
      properties: {
        ...state.properties,
        [action.property]: action.propertyValue
      }
    })
  ),

  on(
    LoadPerformancePropertyFailure,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: false
      },
      propertiesError: {
        ...state.propertiesError,
        [action.property]: action.propertyError
      }
    })
  ),
)

export function PerformanceReducer(state, action) {
  return _performanceReducer(state, action)
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
