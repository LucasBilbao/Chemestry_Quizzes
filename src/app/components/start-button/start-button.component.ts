import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cq-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss'],
})
export class StartButtonComponent {
  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigate(['/quiz']).then();
  }
}
