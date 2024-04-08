import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "../_services/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private dataService: DataStorageService) {
  }

  ngOnInit(): void {
    this.dataService.fetchProjects().subscribe();
  }
}
