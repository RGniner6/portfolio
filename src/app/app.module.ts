import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectComponent } from './components/project-list/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faLinkedin, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons/faAddressCard';
import {faCode} from '@fortawesome/free-solid-svg-icons/faCode';
import {faAngular} from '@fortawesome/free-brands-svg-icons/faAngular';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons/faFileAlt';
import {faGrin} from '@fortawesome/free-solid-svg-icons/faGrin';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import {ReactiveFormsModule} from '@angular/forms';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    PortfolioComponent,
    ProjectListComponent,
    ProjectComponent,
    ContactComponent,
    ProjectDetailsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faLinkedin, faEnvelope, faGithubSquare, faGithub, faAddressCard, faCode, faAngular, faNodeJs, faFileAlt, faGrin
    );
  }
}
