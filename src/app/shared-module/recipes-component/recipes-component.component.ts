import { Component, OnInit } from '@angular/core';

import { Recipe } from './../../shared/recipe.model';

import allRecipes from './../../shared/recipe.json';

@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.scss'],
})

export class RecipesComponentComponent implements OnInit {

  recipes: any;

  constructor() {
    this.recipes = allRecipes;
  }

  ngOnInit() {}

}
