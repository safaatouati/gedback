import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../../models/car';
import {HttpResponse} from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',

      'Accept': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})


export class FamilyprocService {

  constructor(private http: HttpClient) { }

  webApiUri: string = 'http://localhost:8000/test/file';
  apiproc: string = 'http://localhost:8000/api/procs';
  process: string = 'http://localhost:8000/api/process';
  processDetails: string = 'http://localhost:8000/api/process/';
  procedureDetails: string = 'http://localhost:8000/api/procedure/';
  toolsDetails: string = 'http://localhost:8000/api/Tool/';
  tools: string = 'http://localhost:8000/api/Tools';
  refProc: string = 'http://localhost:8000/api/cartography';
  contentred:string='http://localhost:8000/api/proc/risk/';
  indicators:string='http://localhost:8000/api/proc/indicator/';
  toolContent:string='http://localhost:8000/api/proc/tool/';
  ptool:string='http://localhost:8000/api/ptool/';
  getview() {
   const body = this.webApiUri 

  return this.http.get(body, httpOptions);

}

getprocTool(id) {
  const body = this.ptool+id 

 return this.http.get(body, httpOptions);

}
getProcess() {
  const body = this.apiproc 

 return this.http.get(body, httpOptions);

}

getApiProcess() {
  const body = this.apiproc 

 return this.http.get(body, httpOptions);

}
getCarsSmall() {
  const body = this.webApiUri 

  return this.http.get(body, httpOptions);
}



getprocessDetails(id) {
  const body = this.processDetails + id;

  return this.http.get(body, httpOptions);
}
getProcedureDetails(id) {
  const body = this.procedureDetails + id;

  return this.http.get(body, httpOptions);
}


gettoolsDetails(id) {
  const body = this.toolsDetails + id;

  return this.http.get(body, httpOptions);
}

gettools() {
  const body = this.tools ;

  return this.http.get(body, httpOptions);
}
getRefCart() {
  const body = this.refProc ;

  return this.http.get(body, httpOptions);
}

getcontent(id) {
  const body = this.contentred+id ;

  return this.http.get(body, httpOptions);
}

downloadFile(): Observable<any>{
  return this.http.get('http://localhost:8000/api/proc/risk/', {responseType: 'blob'});
}
getIndicator(id){
  const body = this.indicators+id ;

  return this.http.get(body, httpOptions);
}

getToolContent(id){
  const body = this.toolContent+id ;

  return this.http.get(body, httpOptions);
}
}
