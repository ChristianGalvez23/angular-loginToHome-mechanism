import { HomeComponent } from './home.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PorfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PorfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [PrincipalRoutingModule],
  providers: [],
  exports: [
    PrincipalRoutingModule,
    HeaderComponent,
    PorfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class PrincipalModule {}
