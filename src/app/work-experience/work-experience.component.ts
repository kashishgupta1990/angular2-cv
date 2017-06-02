import { Component } from '@angular/core';
import {SharedService} from "../services/SharedService";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html'
})
export class WorkExperienceComponent {

  constructor(private _sharedService:SharedService) { }
  workExperience = this._sharedService.workExperience;

}
