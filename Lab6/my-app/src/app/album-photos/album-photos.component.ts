import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photos, Albums } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos!: Photos[];

  constructor(private route: ActivatedRoute,
    private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbumPhotos();
  }

  getAlbumPhotos(){
    this.route.paramMap.subscribe((params)=> {
      const albumId = Number(params.get('albumId'));
      this.albumService.getAlbumPhotos(albumId).subscribe((photos)=> {
        this.photos = photos;
      });
    });
    }
}
