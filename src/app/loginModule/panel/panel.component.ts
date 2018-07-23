import { Component } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class LoginComponent {
  constructor(private _router: Router) {}

  protected logIn(): void {
    this._router.navigateByUrl('home');
  }
}
