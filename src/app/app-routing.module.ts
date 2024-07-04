import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { TeacherSectionComponent } from './teacher-section/teacher-section.component';
import { CoursesSectionComponent } from './courses-section/courses-section.component';
import { ReviewSectionComponent } from './review-section/review-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { HomeSectionComponent } from './home-section/home-section.component';

const routes: Routes = [
{path:'home',component:HomeSectionComponent},
{path:'about',component:AboutSectionComponent},
{path:'teacher',component:TeacherSectionComponent},
{path:'courses',component:CoursesSectionComponent},
{path:'review',component:ReviewSectionComponent},
{path:'contact',component:ContactSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
