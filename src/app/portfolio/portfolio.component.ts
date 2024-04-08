import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ProjectsService} from "../_services/projects.service";
import {Project} from "../_models/Project";
import {Tag} from "../_models/Tag";
import {DataStorageService} from "../_services/data-storage.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapsed: boolean = true;

  java: boolean = false;
  javascript: boolean = false;
  typescript: boolean = false;

  angular: boolean = false;
  react: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Ienei Raul-Alin - Portfolio");
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();

  }
  filter() {
    let filterTags: Tag[] = [];

    if(this.java) {
      filterTags.push(Tag.JAVA);
    }
    if(this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if(this.react) {
      filterTags.push(Tag.REACT);
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }
}
