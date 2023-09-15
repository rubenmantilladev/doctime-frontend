import { Component, OnInit, inject } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
import { Doctor } from 'src/app/shared/models/doctors.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  //COMPORTAMIENTO DE LOS TABS
  tabs: string[] = ['Dirección', 'Especialidades'];
  doctors: Doctor[] = [];
  public search = '';
  //TAB ACTIVO
  activeTabsIndex = 0;

  private doctorService = inject(DoctorsService);
  ngOnInit(): void {
    this.allDoctors();
  }
  allDoctors() {
    this.doctorService.getAllDoctors().subscribe((data) => {
      const docArray = JSON.parse(JSON.stringify(data)).doctors;
      this.doctors = docArray;
    });
  }

  searchSpeciality(search: string) {
    this.search = search;
  }

  tabsChange(tab: number) {
    this.activeTabsIndex = tab;
  }
}
