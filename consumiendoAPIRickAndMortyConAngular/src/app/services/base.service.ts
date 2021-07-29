import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  url = environment.url;
  endpoint: string = '';

  constructor(private http: HttpClient) {}

  setEndPoint(endpoint) {
    this.endpoint = endpoint;
  }

  async get() {
    try {
      const result = await this.http
        .get(`${this.url}/${this.endpoint}`)
        .toPromise();
      return result;
    } catch (e) {
      this.handlerError(e);
    }
  }

  async post(body) {
    try {
      const result = await this.http
        .get(`${this.url}/${this.endpoint}`, body)
        .toPromise();
      return result;
    } catch (e) {
      this.handlerError(e);
    }
  }

  handlerError({ status }) {
    if (status === 401) return 'unauthorized';
    else if (status === 500) return 'internal server error';
  }
}
