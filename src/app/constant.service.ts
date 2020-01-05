import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConstantService {
    static baseUrl = 'http://localhost:8080/';
    static urls = {
        branches: 'branches'
    }
    constructor(private http:HttpClient) {

    }
    get(url){
        return this.http.get(`${ConstantService.baseUrl}${url}`);
    }
    post(url,payload){
        const  headers = new  HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
        return this.http.post(`${ConstantService.baseUrl}${url}`,payload,{headers});
    }

}