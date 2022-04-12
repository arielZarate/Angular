import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  //router sirve para cargar renderizar una pagina desde el ts
  //routerLink sirve para el front ,para renderizar como un boton es un href s

  /*
  redirigir() {
    this.router.navigate(['characetr/id']);
    //otraforma
    this.router.navigateByUrl('Recibe un strings');
  }
  */
  url = environment.url;
  endpoint = '';
  constructor(private http: HttpClient, private router: Router) {}

  // SEO
  setEndPoint(endpoint: string) {
    this.endpoint = endpoint;
  }

  private getHttpOptions() {
    let httpOptions = {};
    const token = localStorage.getItem('JWT'); //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjA1MTg1MTU4LCJleHAiOjE2MDUxOTIzNTh9.Jsjgbq-DntseYRXB-hHTclKZuIbpJWweRQN0brILrKM
    token
      ? (httpOptions = new HttpHeaders({
          Authorization: token,
        }))
      : null;
    //'Token vacio'

    return httpOptions;
  }

  async get() {
    // return await this.http.get(url).toPromise()
    try {
      const data: any = await this.http
        .get(`${this.url}/${this.endpoint}`, this.getHttpOptions())
        .toPromise();
      return data;
    } catch (e) {
      this.handlerError(e);
    }
  }
  async post(obj: Object) {
    // return await this.http.get(url).toPromise()
    try {
      const data: any = await this.http
        .post(`${this.url}/${this.endpoint}`, obj, this.getHttpOptions())
        .toPromise();
      return data;
    } catch (e) {
      this.handlerError(e);
    }
  }
  async put(obj: any) {
    // return await this.http.get(url).toPromise()
    try {
      const data: any = await this.http
        .put(`${this.url}/${this.endpoint}`, obj, this.getHttpOptions())
        .toPromise();
      return data;
    } catch (e) {
      this.handlerError(e);
    }
  }
  // PUT -> ()

  handlerError(e: any) {
    //se podria agregar un sweetelert tambien conn un mensaje mas definido y estetico

    //el router.navigate redirije a otra cosa ebn caso de error
    e.status === 401 ? this.router.navigate(['login']) : null;
    e.status === 404 ? this.router.navigate(['notfound']) : null;
  }
}
