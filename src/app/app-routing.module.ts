import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'education', loadChildren: './education/education.module#EducationPageModule' },
  { path: 'languages', loadChildren: './languages/languages.module#LanguagesPageModule' },
  { path: 'experience', loadChildren: './experience/experience.module#ExperiencePageModule' },
  { path: 'language-detail/:language', loadChildren: './language-detail/language-detail.module#LanguageDetailPageModule' },
  { path: 'experience-detail/:job', loadChildren: './experience-detail/experience-detail.module#ExperienceDetailPageModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsPageModule' },
  { path: 'projects-detail/:project', loadChildren: './projects-detail/projects-detail.module#ProjectsDetailPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
