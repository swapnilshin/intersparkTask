import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interspark';
  constructor(private router: Router){}
  home(){
    this.router.navigate(['jobs'])
  }
}
