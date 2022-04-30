import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BacklogApiService {

  constructor(private http:HttpClient) {}

  getMyself(apiKey: string){
    return this.http.get(`https://nulab.backlog.jp/api/v2/users/myself?apiKey=${ apiKey }`)
  }

  getProjects(apiKey: string){
    return this.http.get(`https://nulab.backlog.jp/api/v2/projects?apiKey=${ apiKey }`)
  }

  getMilestones(apiKey:string, projectId:string){
    return this.http.get(`https://nulab.backlog.jp/api/v2/projects/${projectId}/versions?apiKey=${projectId}`)
  }
}
