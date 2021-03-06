import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.setDefaultLang('en');
    // this.translate.use(localStorage.getItem('lang') || 'en');
    // translate.addLangs(['en', 'fr']);
    // for default language to be french, you need to use below code
    translate.use('en');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
