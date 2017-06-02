import { Component } from '@angular/core';
import {SharedService} from "../../services/SharedService";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html'
})
export class InfoComponent {

  constructor(private _sharedService: SharedService) { }
  person = this._sharedService.about;
  emailTo = 'mailto:' + this._sharedService.about.emailId;
}
