import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { TeacherSectionComponent } from './teacher-section/teacher-section.component';
import { CoursesSectionComponent } from './courses-section/courses-section.component';
import { ReviewSectionComponent } from './review-section/review-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    AboutSectionComponent,
    TeacherSectionComponent,
    CoursesSectionComponent,
    ReviewSectionComponent,
    ContactSectionComponent,
    HomeSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
