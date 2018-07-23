import { Component } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private _router: Router) {}
  protected logOut(): void {
    this._router.navigateByUrl('login');
  }
}
