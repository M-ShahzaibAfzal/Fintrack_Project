// home-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userName: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve query parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.userName = params['fullName'];
    });
  }
}
