import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobDto } from '../interfaces';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpService: HttpserviceService) { }

  getAllJobList(): Observable<JobDto[]> {
    return this.httpService.get('jobs');
  }

  getJobById(id: number): Observable<JobDto> {
    return this.httpService.get(`jobs/${id}`);
  }

  saveJob(formData: JobDto) {
    return this.httpService.post(`jobs/`, formData);
  }

  updateJob(formData: JobDto) {
    return this.httpService.put(`jobs/${formData.id}`, formData);
  }
}
