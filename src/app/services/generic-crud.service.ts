import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudOperations } from './CrudOperations';

@Injectable({
  providedIn: 'root'
})
export class GenericCRUDService <T,ID extends CrudOperations<T, ID>> {

  constructor(
    protected _http: HttpClient,
    protected _base: "http://localhost:8080/rest/"
  ) {}

  save(modelpath,t: T): Observable<T> {
    return this._http.post<T>(this._base + modelpath+ "/insert" , t);
  }

  update(modelpath,id: ID, t: T): Observable<T> {
    return this._http.put<T>(this._base + "/" + modelpath + "/update"  + id, t, {});
  }

  findOne(modelpath,id: ID): Observable<T> {
    return this._http.get<T>(this._base + "/" + modelpath + id);
  }

  findAll(modelpath): Observable<T[]> {
    return this._http.get<T[]>(this._base + modelpath + "/all")
  }

  delete(modelpath,id: ID): Observable<T> {
    return this._http.delete<T>(this._base + modelpath + "/remove" + id);
	}

}
