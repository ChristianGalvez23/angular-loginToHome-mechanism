import { NgModule } from '@angular/core';
import { LoginComponent } from './panel/panel.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule],
  providers: [],
  exports: [LoginRoutingModule, LoginComponent]
})
export class LoginModule {}
