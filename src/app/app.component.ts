import { Component } from '@angular/core';

import { CarouselModule,NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

langs: string[] = [];

  title = 'multiIdioma';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(["es", "en"]);
    this.langs = this.translate.getLangs();

    // translate.get(this.langs).subscribe(res => {
    //   console.log(res);
    // });

   }

   cambiarLang(lang:string){
     this.translate.use(lang);
   }
}
