import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { Doctor } from '../shared/models/doctors.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  apiURI = '/assets/json/doctor.json';
  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}

  doctorsList(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctor`);
  }
  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiURI).pipe(
      //convertir la data en un arreglo de doctores
      map((data) => data as Doctor[])
    );
  }
}
