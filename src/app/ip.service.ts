import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
interface CustomPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})


export class IpService {

  constructor(private http: HttpClient) { }
  public getIPAddress() {
    return this.http.get("http://api.ipify.org/?format=json");
  }
  getCurrentLocation(): Observable<CustomPosition> {
    return new Observable((observer: Observer<CustomPosition>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: CustomPosition) => {
            observer.next(position);
            observer.complete();
          },
          (error: any) => observer.error(error)
        );
      } else {
        observer.error('Geolocation is not supported by your browser.');
      }
    });
  }
}  