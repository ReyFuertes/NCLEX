import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

import { BaseService } from 'src/app/services/base.service';
import { UniversityModel } from '../models/university.model';

@Injectable()
export class UniversityService extends BaseService {
  /**
   * Define your service api here and use extended class
   */

  private universities$: UniversityModel[] = [
    {
      "id": 1,
      "name": "Yale University",
      "imageUrl": "./assets/images/global/universities/YaleU.png"
    },
    {
      "id": 2,
      "name": "John Hopkings University",
      "imageUrl": "./assets/images/global/universities/JohnHopkinsU.png"
    },
    {
      "id": 3,
      "name": "Columbia University",
      "imageUrl": "./assets/images/global/universities/ColumbiaU.png"
    },
    {
      "id": 4,
      "name": "Vander University",
      "imageUrl": "./assets/images/global/universities/VanderbiltU.png"
    },
    {
      "id": 5,
      "name": "Mayo Clinic University",
      "imageUrl": "./assets/images/global/universities/MayoU.png"
    },
    {
      "id": 6,
      "name": "Yale University",
      "imageUrl": "./assets/images/global/universities/YaleU.png"
    },
    {
      "id": 7,
      "name": "Columbia University",
      "imageUrl": "./assets/images/global/universities/JohnHopkinsU.png"
    },
    {
      "id": 8,
      "name": "University 3",
      "imageUrl": "./assets/images/global/universities/ColumbiaU.png"
    },
    {
      "id": 9,
      "name": "Vander University",
      "imageUrl": "./assets/images/global/universities/VanderbiltU.png"
    },
    {
      "id": 10,
      "name": "Mayo Clinic University",
      "imageUrl": "./assets/images/global/universities/MayoU.png"
    }
  ]

  // getUniversities(url): Observable<UniversityModel[]> {
  //   return this.get(url).pipe(
  //     map(data => data),
  //     catchError(this.handleError)
  //   )
  // }
  getUniversities(): UniversityModel[] {
    return this.universities$
  }
}