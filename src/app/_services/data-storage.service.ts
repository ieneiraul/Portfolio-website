import {Injectable} from "@angular/core";
import {Project} from "../_models/Project";
import {map, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProjectsService} from "./projects.service";
import {Tag} from "../_models/Tag";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient, private projectsService: ProjectsService) {

  }

  convertTags(strings: Tag[]) {
    let tags: Tag[] = [];
    console.log(strings)
    for (let str of strings) {
      console.log(str);
      if("JAVA" === str.toString()) {
        tags.push(Tag.JAVA);
      }
      if("REACT" == str.toString()) {
        tags.push(Tag.REACT)
      }
      if("ANGULAR" == str.toString()) {
        tags.push(Tag.ANGULAR)
      }
      if("TYPESCRIPT" == str.toString()) {
        tags.push(Tag.TYPESCRIPT)
      }
      if("JAVASCRIPT" == str.toString()) {
        tags.push(Tag.JAVASCRIPT)
      }

    }
    console.log(tags);
    return tags;
  }

  fetchProjects() {
    return this.http
      .get<Project[]>(
        'https://ng-portfolio-77395-default-rtdb.firebaseio.com/projects.json'
      )
      .pipe(
        map(projects => {
          return projects.map(project => {
            return {
              ...project,
              tags: project.tags ? this.convertTags(project.tags) : []
            };
          });
        }),
        tap(projects => {
          this.projectsService.setProjects(projects);
          console.log(projects);
        })
      );
  }


}
