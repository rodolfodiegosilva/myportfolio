import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngular, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGlobe, faEllipsisH, faMapMarkerAlt, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap, faAward, faBookOpen, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faLock, faLockOpen, faExternalLinkAlt, faAt } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GroupComponent } from './group/group.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderGroupComponent } from './header-group/header-group.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { DaterangeComponent } from './daterange/daterange.component';
import { QualificationComponent } from './qualification/qualification.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { SkillItemComponent } from './skill-item/skill-item.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { QualificationModalComponent } from './qualification-modal/qualification-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GroupComponent,
    HomePageComponent,
    HeaderGroupComponent,
    AvatarComponent,
    ProjectItemComponent,
    FooterComponent,
    TimelineItemComponent,
    DaterangeComponent,
    QualificationComponent,
    ProjectModalComponent,
    ImageGalleryComponent,
    SkillItemComponent,
    SkillListComponent,
    QualificationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faAngular, faReact, faCode, faLinkedin, faTwitter, faFacebookF, faInstagram, faGithub, faStackOverflow,
      faHome, faEnvelope, faGlobe, faEllipsisH, faMapMarkerAlt, faGraduationCap, faAward, faBookOpen, faChevronRight, faChevronLeft,
      faChevronUp, faLockOpen, faLock, faExternalLinkAlt, faBootstrap, faAt );
  }
}
