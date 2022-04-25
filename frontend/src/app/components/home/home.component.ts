import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageTitleService } from 'src/app/services/page-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleProvider: PageTitleService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.titleProvider.getTitle("Home"));
  }

}
