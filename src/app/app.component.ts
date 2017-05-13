import { Component } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isCollapsed:boolean = true;
  public collapsed(event:any):void {}
  public expanded(event:any):void {}

  constructor(private localize: LocalizeRouterService) {
    console.log('ROUTES', this.localize.parser.routes);
  }

  changeLanguage(lang: string) {
    this.localize.changeLanguage(lang);
  }
}
