import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}
  getRemoteData() {
    return this.http.get(
      "https://gymh.philippdormann.de/mensaplan/cached.json"
    );
  }
}
