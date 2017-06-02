import {Component} from '@angular/core';
import {SharedService} from "../services/SharedService";

@Component({
    selector: 'app-other-projects',
    templateUrl: './other-projects.component.html'
})
export class OtherProjectsComponent {
    constructor(private _sharedService: SharedService) {
    }
    projects = this._sharedService.otherProjects;
}
