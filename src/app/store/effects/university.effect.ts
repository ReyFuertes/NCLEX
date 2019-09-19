import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UniversityActionTypes, UniversityActions } from '../actions/university.action';

@Injectable()
export class UniversityEffects {
  constructor(private actions$: Actions) { }

  @Effect()
  public loadUniversity$: Observable<any> = this.actions$.pipe(
    ofType(UniversityActionTypes.LoadUniversity),
    mergeMap((action: UniversityActions) => of([1, 2, 3]).pipe(
      map(([sampleArr]) => {
        return {
          type: UniversityActionTypes.LoadUniversitySuccess,
          payload: null
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );
}
