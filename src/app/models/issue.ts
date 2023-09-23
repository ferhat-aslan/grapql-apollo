import { PageInfo } from "./pageInfo";
import { Owner, Repository } from "./repository";

export interface Issues{
    [key:string]:any;
    totalCount?:number;
    edges?:IssueEdge[];
    pageInfo?:PageInfo;
}

export interface IssueEdge {
    [key:string]:any;
    node?:IssueNode;
}
export interface IssueNode {
    [key:string]:any;
    number?:number;
    author?:Owner;
    comments?:Comments;
    url?:string;
    title?:string;
    closed?:boolean;
    
}
export interface Comments {
    [key:string]:any;
    totalCount?:number;}

export interface IssueResponse {
    [key:string]:any;
    data?:IssueData;
}

export interface IssueData {
    repository:Repository
}