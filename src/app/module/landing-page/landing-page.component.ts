import { Component, OnInit } from '@angular/core';
import { LandingPageService } from 'app/data/service/landing-page/landing-page.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  constructor(
    private service: LandingPageService
  ) { }

  ngOnInit(): void {
  }
  goToSecondApplication(page: any) {
    window.open(environment.secondApplication + page, "_self")
  }

}
