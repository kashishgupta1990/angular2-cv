import {Component} from '@angular/core';
import {SharedService} from "../../services/SharedService";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html'
})
export class SkillsComponent {

    constructor(private _sharedService: SharedService) {
    }

    skill = this._sharedService.skill;
}
