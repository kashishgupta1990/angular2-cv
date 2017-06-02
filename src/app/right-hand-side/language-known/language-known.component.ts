import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/SharedService";

@Component({
    selector: 'app-language-known',
    templateUrl: './language-known.component.html'
})
export class LanguageKnownComponent implements OnInit {

    constructor(private _sharedService: SharedService) {
    }

    languages:any = this._sharedService.knownLanguage;

    ngOnInit() {
        this.languages.forEach((language)=> {
            language.rateList = [];
            for (let index = 0; index < language.rate; index++) {
                language.rateList.push(index);
            }
        });
    }

}
