import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ResumeComponent} from "./resume/resume.component";
import {ContactComponent} from "./contact/contact.component";
import {ProjectResolverService} from "./_services/project-resolver.service";

const routes: Routes = [
  {path: "home", component: HomeComponent, resolve:[ProjectResolverService]},
  {path: "portfolio", component: PortfolioComponent, resolve:[ProjectResolverService]},
  {path: "resume", component: ResumeComponent},
  {path: "contact", component: ContactComponent},
  {path: "**", component: HomeComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
