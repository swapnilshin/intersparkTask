import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDto } from '../interfaces';
import { ApiserviceService } from '../services/apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {

  formData?: JobDto;
  myForm?: FormGroup;
  sbmitBtnName: string = 'Add';


  constructor(private route: ActivatedRoute, private apiService: ApiserviceService, private fb: FormBuilder, private router: Router) {
    this.route.params.subscribe(data => {
      if (!isNaN(parseInt(data['id'])))
        this.apiService.getJobById(data['id']).subscribe(res => {
          this.formData = res;
          if (!this.formData.id)
            return;
          this.sbmitBtnName = 'Update'
          this.myForm?.setValue({
            jid: this.formData.id,
            jnumber: this.formData.job_number,
            jtitle: this.formData.job_title,
            jstartDate: this.formData.job_start_date,
            jcloseDate: this.formData.job_close_date,
            jexperieceRequired: this.formData.experience_required,
            jopeningCount: this.formData.number_of_openings,
            jnotes: this.formData.job_notes
          })
        });
    })
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      jid: [null],
      jnumber: [null, Validators.required],
      jtitle: ['', Validators.required],
      jstartDate: ['', Validators.required],
      jcloseDate: ['', Validators.required],
      jexperieceRequired: [false, Validators.required],
      jopeningCount: [0, Validators.required],
      jnotes: ['', Validators.required]
    })
  }

  update() {
    let data: JobDto = {
      id: this.myForm?.value.jid,
      experience_required: this.myForm?.value.jexperieceRequired,
      job_close_date: this.myForm?.value.jcloseDate,
      job_notes: this.myForm?.value.jnotes,
      job_number: this.myForm?.value.jnumber,
      job_start_date: this.myForm?.value.jstartDate,
      job_title: this.myForm?.value.jtitle,
      number_of_openings: this.myForm?.value.jnumber,
    }
    if (!data.id)
      this.apiService.saveJob(data).subscribe(data => {
        this.router.navigate(['jobs']);
      })
    else
      this.apiService.updateJob(data).subscribe(data => {
        this.router.navigate(['jobs']);
      })
  }

}
