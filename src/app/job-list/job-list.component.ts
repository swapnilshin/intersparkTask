import { Component, OnInit } from '@angular/core';
import { JobDto } from '../interfaces';
import { ApiserviceService } from '../services/apiservice.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit{
  jobList ?: Observable<JobDto[]>;

  constructor(private apiService:ApiserviceService,private router: Router){}

  ngOnInit(): void {
    this.jobList = this.apiService.getAllJobList();
  }

  openDetailedView(obj : JobDto){
    this.router.navigate(['/jobs',obj.id])
  }

  addNew(){
    this.router.navigate(['/jobs/new'])
  }


}
