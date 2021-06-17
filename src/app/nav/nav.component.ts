import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor(private translate: TranslateService) {
    
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.setDefaultLang('en');
    // this.translate.use(localStorage.getItem('lang') || 'en');
    translate.addLangs(['en', 'fr']);
    // for default language to be french, you need to use below code
    translate.use('en');

  }
  
  ngOnInit() { 
  }
   changeLang(language: string){
    this.translate.use(language);
   }
}
