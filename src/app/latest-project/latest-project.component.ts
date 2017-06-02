import { Component } from '@angular/core';
import {SharedService} from "../services/SharedService";

@Component({
  selector: 'app-latest-project',
  templateUrl: './latest-project.component.html'
})
export class LatestProjectComponent {

  constructor(private _sharedService:SharedService) { }
  specialProject = this._sharedService.latestProjects.specialProject;
  projects = this._sharedService.latestProjects.projects;

}
