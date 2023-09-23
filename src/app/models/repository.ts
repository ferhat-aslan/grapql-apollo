import { Issues } from "./issue";
import { PageInfo } from "./pageInfo";

export interface Owner {
    [key:string]:any;
    id?:string;
    login?:string;
    avatarUrl?:string;
    url?:string
    repositories?:Repositories;
}
export interface Repositories {
    [key:string]:any;
    totalCount:number;
}
export interface Watchers {
    [key:string]:any;
    totalCount:number;
}
export interface StarGazers {
    [key:string]:any;
    totalCount:number;
}
export interface PullRequests {
    [key:string]:any;
    totalCount:number;
}
export interface Repository {
    [key:string]:any;
    name:string;
    stargazerCount?:number;
    watchers?:Watchers;
    owner?:Owner;
    updatedAt?:string;
    shortDescriptionHTML?:string;
    pullRequests?:PullRequests;
    url?:string;
    issues?:Issues;
    pageInfo?:PageInfo;
    stargazers?:StarGazers;


}
export interface ReposResponse {
    [key:string]:any;
    repo:Repository;
}
export interface SearchResponse {
    [key:string]:any;
    repos:ReposResponse[];
    pageInfo?:PageInfo;
}
export interface SearchDataResponse {
    [key:string]:any;
    search:SearchResponse;
}
export interface SearchRepositoriesResponse {
    [key:string]:any;
    data:SearchDataResponse;
}