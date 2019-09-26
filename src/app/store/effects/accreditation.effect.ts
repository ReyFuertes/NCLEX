import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LoadAccreditationListSuccess, LoadAccreditationList, LoadAccreditationListFailure, LoadAccreditationPropertySuccess, LoadAccreditationPropertyFailure, LoadAccreditationProperty } from '../actions/accreditation.action';
import { AccreditationService } from 'src/app/services/accreditation.service';
import { AccreditationModel } from 'src/app/models/accreditation.model';
import { of } from 'rxjs';

@Injectable()
export class AccreditationEffects {
  // list
  loadAccreditationList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadAccreditationList),
      mergeMap(() => {
        return this.accreditationService$.getAccreditations()
          .pipe(
            map((accreditations: AccreditationModel[]) =>
              LoadAccreditationListSuccess({ list: accreditations })
            ),
            catchError(error =>
              of(LoadAccreditationListFailure({ error }))
            )
          )
        }
      )
    )
  )

  // property
  loadAccreditationProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadAccreditationProperty),
      mergeMap(({ property }) => {
        return this.accreditationService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadAccreditationPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadAccreditationPropertyFailure({ property, propertyError }))
            )
          )
        }
      )
    )
  )

  constructor(
    private actions$: Actions,
    private accreditationService$: AccreditationService
  ) { }
}
