import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export interface Language {
  id: string;
  title: string;
}


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  languages: Language[];
  selectedLanguage: Language;

  constructor(private translate: TranslateService) {
    this.translate.use('en');
  }

  ngOnInit() {
    this.languages = [
      {
        id: 'en',
        title: 'English'
      },
      {
        id: 'de',
        title: 'German'
      },
      {
        id: 'fr',
        title: 'French'
      },
      {
        id: 'es',
        title: 'Española'
      },
      {
        id: 'kr',
        title: 'Korea'
      },
      {
        id: 'cn',
        title: 'Chinese'
      },
    ];

    this.selectedLanguage = this.languages.find(l => l.id === this.translate.currentLang);
  }

  setLanguage(lang: Language) {
    this.selectedLanguage = lang;
    this.translate.use(lang.id);
  }

}
