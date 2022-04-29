import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { bindCallback } from 'rxjs';
import { map } from 'rxjs/operators';
import { TAB_ID } from '../../../../providers/tab-id.provider';
import { LocalStorageService } from '../../../../service/local-storage.service';
import { BacklogApiService } from '../../../../service/backlog-api.service';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.scss']
})
export class PopupComponent {
  message: string;
  myInfo$ = this._localStorageService.myData$;
  form: FormGroup;

  constructor(
    @Inject(TAB_ID) readonly tabId: number,
    private _localStorageService :LocalStorageService,
    private _backlogApiService :BacklogApiService,
    private _fb: FormBuilder) {}

  ngOnInit(){
    console.log("init")
    this._localStorageService.loadInfo()
    this._initForm()
  }

  private _initForm() {
    this.form = this._fb.group({
       apiKey: ['']
    })
 }

 setInfo() {
  const { apiKey } = this.form.value
  this._localStorageService.setInfo({
     apiKey
  })
}
callBacklogApi(){
  this.myInfo$.subscribe(
    info =>{
      this._backlogApiService.getMyself(info.apiKey)
      .subscribe(
        (data) => {
          console.log("sucess!")
          console.log(JSON.stringify(data))
        },
        (data) => {
          console.log("error!")
          console.log(JSON.stringify(data))
        }
      )
    }
  )
}

clearInfo() {
  this._localStorageService.clearInfo()
}

clearAll() {
  this._localStorageService.clearAllLocalStorage()
}

  async onClick(): Promise<void> {
    this.message = await bindCallback<string>(chrome.tabs.sendMessage.bind(this, this.tabId, 'request'))()
      .pipe(
        map(msg =>
          chrome.runtime.lastError
            ? 'The current page is protected by the browser, goto: https://www.google.nl and try again.'
            : msg
        )
      )
      .toPromise();
  }

}
