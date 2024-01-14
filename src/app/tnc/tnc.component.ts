import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.component.html',
  styleUrls: ['./tnc.component.css']
})
export class TncComponent {
  constructor(private router: Router) { }
  goToHome() {
    this.router.navigate(['/home'])
  }
}
