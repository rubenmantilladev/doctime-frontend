import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { Doctor } from 'src/app/shared/models/doctors.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PerfilDoctorService {
  private apiUrl = `${environment.API_URL}/doctor/:id`;
  private apiURI = '/assets/json/doctor.json';

  constructor(private http: HttpClient) {}

  getDoctorById(doctorId: number) {
    return this.http.get(`${this.apiUrl}/${doctorId}`);
  }

  getDoctorByIdJson(doctorId: number): Observable<Doctor> {
    return this.http.get(`${this.apiURI}`).pipe(
      map((data) => {
        const dataDoctors = JSON.parse(JSON.stringify(data)).doctors;
        const doctor = dataDoctors.filter(
          (doctor: { id: number }) =>
            doctor.id === parseInt(doctorId.toString())
        );
        return doctor[0];
      })
    );
  }
}
