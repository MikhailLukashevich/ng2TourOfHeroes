import { Component } from '@angular/core';
import {Hero} from './hero-detail/hero';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero-detail/hero.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
     title = "Tour of Heroes";
    
     selectedHero: Hero;
     heroes: Hero[];

     constructor(private _heroService: HeroService){}

     ngOnInit (){
       this.getHeroes();
     }

     getHeroes(){
       this._heroService.getHeroes().then(heroes=>this.heroes=heroes);
     }
     onSelect(hero: Hero){this.selectedHero = hero;}
}
