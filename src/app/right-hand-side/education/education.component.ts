import { Component } from '@angular/core';
import {SharedService} from "../../services/SharedService";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent {

  constructor(private _sharedService: SharedService) { }
  educationQualification = this._sharedService.educationQualification;

}
