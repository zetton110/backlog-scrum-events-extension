import { TryCatchStmt } from '@angular/compiler';
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

   init(){
      const data = { apiKey: "" }
      this._localStorage.setItem('myData', JSON.stringify(data))
      this._myData$.next(data)  
   }

  setInfo(data: MyData) {
    const jsonData = JSON.stringify(data)
    this._localStorage.setItem('myData', jsonData)
    this._myData$.next(data)
 }

 loadInfo() {
    if(!this._localStorage.getItem('myData')){
       this.init()
    }
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
