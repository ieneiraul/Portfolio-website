import { Injectable } from '@angular/core';
import {Project} from "../_models/Project";
import {Tag} from "../_models/Tag";
import {map, tap} from "rxjs";
import {DataStorageService} from "./data-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
      {id: 0, name: "Sample React Project", pictures: [], projectLink: "//www.github.com", summary: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT]}
  ];

  constructor() { }

  setProjects(proj: Project[]) {
    this.projects = proj;
  }

  getProjects() {
    return this.projects;
  }

  getProjectByID(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if(project === undefined) {
      throw new TypeError('There is no project with the id: '+ id);
    }

    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filtertTag){
        if(project.tags.includes(filtertTag) == false) {
          foundAll = false;
        }
      });

      if(foundAll == true) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
