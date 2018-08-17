import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title: String;
  movies = [];
  movie;
  // result: Object;
  constructor(private router: Router , private omdbService: SearchService) {}

  // getMovie(title: String) {
  // this.omdbService.searchMovie(title)
  //      .subscribe(next: (result) => {
  //               this.result = result;
  // });
  // }
  getMovie(title: string) {
    this.omdbService.getMovies(title)
                   .then(re => this.movies = re.Search);
  }

  onWorking(mve) {
    this.omdbService
      .addMovie(mve)
      .subscribe(data => (this.movie = data));
    console.log(this.movie);
    return this.movie;
  }
  ngOnInit() {}
}