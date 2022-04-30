import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BacklogApiService {

  constructor(private http:HttpClient) {}

  // 'Get Own User' Api EndPoint
  // Returns own information about user.
  // DOC: https://developer.nulab.com/docs/backlog/api/2/get-own-user/#role
  getOwnUser(apiKey: string){
    return this.http.get(`https://nulab.backlog.jp/api/v2/users/myself?apiKey=${ apiKey }`)
  }
  // 'Get Project List' Api EndPoint
  // Returns list of projects.
  // DOC: https://developer.nulab.com/docs/backlog/api/2/get-project-list/#
  getProjectList(apiKey: string){
    return this.http.get(`https://nulab.backlog.jp/api/v2/projects?apiKey=${ apiKey }`)
  }

  // 'Get Version/Milestone List' Api EndPoint
  // Returns list of Versions/Milestones in the project.
  // DOC: https://developer.nulab.com/docs/backlog/api/2/get-version-milestone-list/#
  getVersionMilestoneList(apiKey:string, projectId:string){
    return this.http.get(`https://nulab.backlog.jp/api/v2/projects/${projectId}/versions?apiKey=${projectId}`)
  }
  // 'Get Status List of Project' Api EndPoint
  // Returns list of status in the project.
  // DOC: https://developer.nulab.com/docs/backlog/api/2/get-status-list-of-project/#
  getStatusListOfProject(apiKey:string, projectId:string){
    return this.http.get(`https://nulab.backlog.jp/api/v2/projects/${projectId}/statuses?apiKey=${projectId}`)
  }

  // 'Get Issue List' Api EndPoint
  // Returns list of issues.
  // DOC: https://developer.nulab.com/docs/backlog/api/2/get-issue-list/#
  getIssueList(apiKey:string, projectId:string, milestoneId:string){
    return this.http.get(`https://nulab.backlog.jp/api/v2/issues?projectId[0]=${projectId}&milestoneId[0]=${milestoneId}&apiKey=${projectId}`)
  }
}
