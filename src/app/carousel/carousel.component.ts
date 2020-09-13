import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items = [];
  // images =[];
  constructor(private http: HttpClient) {
    this.http.get(`https://api.bodysky.com/search/top`).toPromise().then(data => {
      for (let key in data)
        if(data.hasOwnProperty(key))
          this.items.push(data[key]);
    });
    
   }

  ngOnInit(): void {
  }

}
