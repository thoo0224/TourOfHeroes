import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { PageTitleService } from 'src/app/services/page-title.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []

  constructor(
    private heroService: HeroService,
    private titleProvider: PageTitleService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.titleProvider.getTitle("Heroes"));
    this.heroService.getHeroes()
      .subscribe(result => this.heroes = result);
  }

}
