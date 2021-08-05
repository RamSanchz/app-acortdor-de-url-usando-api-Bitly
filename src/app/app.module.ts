import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* los interceptores se usan para manejar todas las peticiones que se hacen a las apis (http) asi como el manejo de errores */
import { ShortInterceptor } from './services/short.interceptor';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShortUrlComponent } from './components/short-url/short-url.component';
import { SpinerComponent } from './components/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShortUrlComponent,
    SpinerComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    /* se declaran dentro de los providers */
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ShortInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
