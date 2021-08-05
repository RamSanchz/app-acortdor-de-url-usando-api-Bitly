import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from '../../services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css'],
})
export class ShortUrlComponent implements OnInit {
  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;
  loading: boolean;
  mostrarError: boolean;
  textError: string;

  constructor(private _shortUrlService: ShortUrlService) {
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
    this.loading = false;
    this.mostrarError = false;
    this.textError = '';
  }

  ngOnInit(): void {}

  procesarUrl(): void {
    // Validar si la url es vacia
    if (this.nombreUrl === '') {
      this.error('Por favor ingrese una URL');
      return;
    }

    this.urlProcesada = false;
    this.loading = true;

    setTimeout(() => {
      this.obtenerUrlShort();
    }, 2000);
  }

  obtenerUrlShort(): void {
    this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(
      (data) => {
        console.log(data);
        this.loading = false;
        this.urlProcesada = true;
        this.urlShort = data.link;
      },
      (error) => {
        this.loading = false;
        console.log(error);

        if (error.error.description === 'The value provided is invalid.') {
          this.error('La URL ingresada es invalida');
        }
      }
    );
  }

  error(valor: string): void {
    this.mostrarError = true;
    this.textError = valor;

    // mostramos error por 4 segundos
    setTimeout(() => {
      this.mostrarError = false;
    }, 4000);
  }
}
