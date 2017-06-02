import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedService } from './services/SharedService';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LatestProjectComponent } from './latest-project/latest-project.component';
import { ProjectComponent } from './latest-project/project/project.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { InfoComponent } from './right-hand-side/info/info.component';
import { SkillsComponent } from './right-hand-side/skills/skills.component';
import { EducationComponent } from './right-hand-side/education/education.component';
import { LanguageKnownComponent } from './right-hand-side/language-known/language-known.component';
import { TestimonialsComponent } from './right-hand-side/testimonials/testimonials.component';
import { ContectMeComponent } from './contect-me/contect-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    LatestProjectComponent,
    ProjectComponent,
    WorkExperienceComponent,
    OtherProjectsComponent,
    InfoComponent,
    SkillsComponent,
    EducationComponent,
    LanguageKnownComponent,
    TestimonialsComponent,
    ContectMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
