import { TryCatchStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { LocalStorageRefService } from './local-storage-ref.service';

interface MyData {
  apiKey: string,
  project: string,
  milestone: string,
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
      const data:MyData = { apiKey: "", project: "", milestone: "" }
      this._localStorage.setItem('myData', JSON.stringify(data))
      chrome.storage.local.set(data, function() {
         console.log(`stored:${JSON.stringify(data)}`);
         this._myData$.next(data);
       });
   }

  setInfo(data: MyData) {
    let jsonData = JSON.stringify(data)
    chrome.storage.local.set(data, function() {
      console.log(`stored:${JSON.stringify(data)}`);
      this._myData$.next(data);
    });


   //  this._localStorage.setItem('myData', jsonData)
 }

 loadInfo = async() => {
   let myData:MyData = { apiKey: "", project: "", milestone: "" }
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(myData, (items:MyData) => {
        if (items === undefined) {
          reject();
        } else {
          this._myData$.next(items);
          resolve(items);
        }
      });
   })

   //  if(!this._localStorage.getItem('myData')){
   //     this.init()
   //  }
   //    const data = JSON.parse(this._localStorage.getItem('myData'))
   //    this._myData$.next(data)        
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
