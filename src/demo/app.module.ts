import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {FormioAppConfig} from "angular-formio";

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  // for development
  // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
  return new TranslateHttpLoader(http, './assets/xcs-views/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    {
      provide: FormioAppConfig, useValue: {
        appUrl: 'http://localhost:4200',
        apiUrl: 'http://localhost:4200',
        formOnly: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
