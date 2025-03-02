import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Albums } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor (private client: HttpClient) { }

  getAlbums(): Observable<Albums[]> {
    return this.client.get<Albums[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Albums> {
    return this.client.get<Albums>(`${this.BASE_URL}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<any> {
    return this.client.get(`${this.BASE_URL}/albums/${id}/photos`);
  }

  createAlbum(newAlbum: Albums): Observable<Albums> {
    return this.client.post<Albums>(`${this.BASE_URL}/albums`, newAlbum);
  }

  updateAlbum(id: number, updatedAlbum: Albums): Observable<Albums> {
    return this.client.put<Albums>(`${this.BASE_URL}/albums/${id}`, updatedAlbum);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }
}
