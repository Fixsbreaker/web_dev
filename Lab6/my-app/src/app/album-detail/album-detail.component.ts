import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Albums } from '../models';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: Albums;
  updatedAlbum!: Albums;
  isUpdating: boolean = false;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('albumId'));
      this.albumService.getAlbum(albumId).subscribe((album) => {
        this.updatedAlbum =  { ...album};
        this.album = album;
        this.updatedAlbum.title = '';
      });
    })
  }
 

  updateAlbum() {
    this.isUpdating = true;
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('albumId'));
      this.albumService.updateAlbum(albumId, this.updatedAlbum).subscribe((updatedAlbum) => {
        this.album = updatedAlbum;
        this.isUpdating = false;
        alert('Album updated successfully!');
        this.updatedAlbum.title = ''; 
      });
    });
  }
}