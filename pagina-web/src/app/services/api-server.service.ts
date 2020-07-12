import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserModel } from "../shared/models/user.model";
import { map } from "rxjs/operators";
import { RespModel } from "../shared/models/resp.model";

@Injectable({
  providedIn: "root",
})
export class ApiServerService {
  private _url = "http://localhost:8080/api/v1/";
  //private _url = "https://guarded-inlet-61566.herokuapp.com/api/v1/";
  private _nameToken = "forest-token";
  private _token: string;
  private _user: UserModel;
  constructor(private _http: HttpClient) {
    this._token = "";
    //this.setToken("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJjcmVhdGVfYXQiOiIyMDIwLTA2LTA2VDEyOjU4OjM4LjkyOTEyNS0wNTowMCIsInVwZGF0ZV9hdCI6IjIwMjAtMDYtMDZUMTI6NTg6MzguOTI5MTI1LTA1OjAwIiwiYWN0aXZlZCI6dHJ1ZSwibmlja19uYW1lIjoiZm9yZXN0IiwiZW1haWwiOiJmb3Jlc3QiLCJkb2N1bWVudF9jb2RlIjoiQ0MiLCJkb2N1bWVudCI6IjExMTExMTExMTEiLCJuYW1lIjoiZm9yZXN0IiwiYWRtaW4iOnRydWV9LCJleHAiOjE1OTUzNDE3ODUsImlzcyI6ImZvcmVzdCJ9.rk0x8PJshnXNLaOz1uZCAwJougwXjNfgCON_lA7c7gPy6sm5S0Oni4tkp8KGGB6DIozlDRAc2tulknNa9sMRvU9_ed734Rqbow8uw__3LioZMgbFMuhOriZzoeBEeuiUtzvXTJLm5VckT8sOmfD34M3g7v8pPlbf0b8V6C8c7Rg");
  }
  setToken(token) {
    sessionStorage.setItem(this._nameToken, token);
    this._token = token;
  }
  getToken(): string {
    if (sessionStorage.getItem(this._nameToken)) {
      this._token = sessionStorage.getItem(this._nameToken);
      return `Bearer ${this._token}`;
    } else {
      return "";
    }
  }
  deleteToken() {
    if (sessionStorage.getItem(this._nameToken)) {
      sessionStorage.removeItem(this._nameToken);
      //sessionStorage
    }
    this._token = "";
  }
  dataToken(): any {
    if (!sessionStorage.getItem(this._nameToken)) {
      return "";
    }
    const base64Url = this._token.split(".")[1];
    const base64 = decodeURIComponent(
      atob(base64Url)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(base64);
  }

  isAutentication(): boolean {
    if (this._token == "") {
      this.getToken();
    }
    if (this._token.length < 2) {
      return false;
    }
    const data = this.dataToken();
    if (data == "") {
      return false;
    }
    this._user = data["user"];
    const now = new Date();
    const exp = new Date(data["exp"] * 1000);
    // console.log(this._user);
    if (exp < now) {
      // this.deleteToken();
      return false;
    }
    return true;
  }

  userToken(): UserModel {
    return this._user;
  }

  GetQuery(query: string, token: boolean = true): Observable<object> {
    let aut: string;
    if (token) {
      aut = this.getToken();
    }
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: aut,
    });
    return this._http.get(`${this._url}${query}`, { headers: header }).pipe(
      map((data: RespModel) => {
        return data || new RespModel();
      })
    );
  }

  PostQuery(
    query: string,
    data: any,
    token: boolean = true
  ): Observable<object> {
    let aut: string;
    if (token) {
      aut = this.getToken();
    } else {
      aut = "";
    }

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: aut,
    });
    return this._http
      .post(`${this._url}${query}`, data, { headers: header })
      .pipe(
        map((data: RespModel) => {
          return data || new RespModel();
        })
      );
  }

  PutQuery(
    query: string,
    data: any,
    token: boolean = true
  ): Observable<object> {
    let aut: string;
    if (token) {
      aut = this.getToken();
    }

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: aut,
    });
    return this._http
      .put(`${this._url}${query}`, data, { headers: header })
      .pipe(
        map((data: RespModel) => {
          return data || new RespModel();
        })
      );
  }

  DeleteQuery(query: string, token: boolean = true): Observable<object> {
    let aut: string;
    if (token) {
      aut = this.getToken();
    }

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: aut,
    });
    return this._http.delete(`${this._url}${query}`, { headers: header }).pipe(
      map((data: RespModel) => {
        return data || new RespModel();
      })
    );
  }
}
