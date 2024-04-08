import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Project} from "../_models/Project";
import {Observable} from "rxjs";
import {DataStorageService} from "./data-storage.service";
import {ProjectsService} from "./projects.service";

@Injectable({providedIn: 'root'})
export class ProjectResolverService implements Resolve<Project[]>{

  constructor(private dataStorageService: DataStorageService, private projectService: ProjectsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const projects = this.projectService.getProjects();

    if(projects.length === 1) {
      return this.dataStorageService.fetchProjects();
    }
    else {
      return projects;
    }
  }

}
