import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gateway} from './gateway.modal';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private http: HttpClient) {}

  addGateway(data: Gateway): Observable<any> {
    return this.http.post<{message: string, data: Gateway}>
    (environment.domain + 'gateway', data);
  }

  getGatewayList(pageSize: number, currentPage: number): Observable<any> {
    return this.http.get<{message: string, data: Gateway[], total: number}>
    (environment.domain + 'gateway?pageSize=' + pageSize + '&currentPage=' + currentPage);
  }
}
