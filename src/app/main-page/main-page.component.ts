import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  x=1
  constructor(private router: Router) {}
  newChange(): void{
    this.router.navigateByUrl('module1');
  }
}
