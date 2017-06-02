import {Component} from '@angular/core';
import {SharedService} from "../services/SharedService";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private _sharedService: SharedService) {
    }

    // Define Variables
    name: string = this._sharedService.name;
    description: string = this._sharedService.description;
    profileImageLink:string = this._sharedService.profileImageLink;
    twitter:string = this._sharedService.socialLinks.twitter;
    googlePlus:string = this._sharedService.socialLinks.googlePlus;
    linkedIn:string = this._sharedService.socialLinks.linkedIn;
    github:string = this._sharedService.socialLinks.github;
    headerButton = this._sharedService.headerButton;
}
