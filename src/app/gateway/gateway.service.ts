import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Gateway} from './gateway.modal';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private http: HttpClient) {}

  addGateway(data: Gateway): Observable<any> {
    return this.http.post<{message: string, data: Gateway}>(environment.domain + 'gateway', data);
  }
}
