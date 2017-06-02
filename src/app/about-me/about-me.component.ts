import { Component } from '@angular/core';
import {SharedService} from "../services/SharedService";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent {
  constructor(private _sharedService:SharedService) { }
  about = this._sharedService.about;

}
