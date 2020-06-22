import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiServerService {
  private _url = "http://localhost:8080/api/v1/";
  private _nameToken = "forest-token";
  constructor(private _http: HttpClient) {
    this.setToken(
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJjcmVhdGVfYXQiOiIyMDIwLTA2LTA2VDEyOjU4OjM4LjkyOTEyNS0wNTowMCIsInVwZGF0ZV9hdCI6IjIwMjAtMDYtMDZUMTI6NTg6MzguOTI5MTI1LTA1OjAwIiwiYWN0aXZlZCI6dHJ1ZSwibmlja19uYW1lIjoiZm9yZXN0IiwiZW1haWwiOiJmb3Jlc3QiLCJkb2N1bWVudF9jb2RlIjoiQ0MiLCJkb2N1bWVudCI6IjExMTExMTExMTEiLCJuYW1lIjoiZm9yZXN0IiwiYWRtaW4iOnRydWV9LCJleHAiOjE1OTUzNDE3ODUsImlzcyI6ImZvcmVzdCJ9.rk0x8PJshnXNLaOz1uZCAwJougwXjNfgCON_lA7c7gPy6sm5S0Oni4tkp8KGGB6DIozlDRAc2tulknNa9sMRvU9_ed734Rqbow8uw__3LioZMgbFMuhOriZzoeBEeuiUtzvXTJLm5VckT8sOmfD34M3g7v8pPlbf0b8V6C8c7Rg"
    );
  }
  setToken(token) {
    sessionStorage.setItem(this._nameToken, token);
  }
  getToken(): string {
    return `Bearer ${sessionStorage.getItem(this._nameToken)}`;
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
    return this._http.get(`${this._url}${query}`, { headers: header });
  }

  PostQuery(query: string, token: boolean = true): Observable<object> {
    let aut: string;
    if (token) {
      aut = this.getToken();
    }

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: aut,
    });
    return this._http.get(`${this._url}${query}`, { headers: header });
  }

  PutQuery(query: string, token: boolean = true): Observable<object> {
    let aut: string;
    if (token) {
      aut = this.getToken();
    }

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: aut,
    });
    return this._http.get(`${this._url}${query}`, { headers: header });
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
    return this._http.get(`${this._url}${query}`, { headers: header });
  }
}
