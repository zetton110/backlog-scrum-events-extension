import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { LocalStorageRefService } from './local-storage-ref.service';

interface MyData {
  apiKey: string
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private _localStorage: Storage;

   constructor(private _localStorageRefService: LocalStorageRefService) {
      this._localStorage = _localStorageRefService.localStorage
   }

  private _myData$ = new BehaviorSubject<MyData>(null)
  public myData$ = this._myData$.asObservable()

  setInfo(data: MyData) {
    console.log(`data:${ JSON.stringify(data) }`)
    const jsonData = JSON.stringify(data)
    this._localStorage.setItem('myData', jsonData)
    this._myData$.next(data)
 }

 loadInfo() {
    const data = JSON.parse(this._localStorage.getItem('myData'))
    this._myData$.next(data)
 }

 clearInfo() {
    this._localStorage.removeItem('myData')
    this._myData$.next(null)
 }

 clearAllLocalStorage() {
    this._localStorage.clear()
    this._myData$.next(null)
 }
 
}
