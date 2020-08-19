import { RecipeTest } from './../../shared/recipe.test.model';
import { Recipe } from './../../shared/recipe.model';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subject, Observable, BehaviorSubject } from 'rxjs';


import allRecipes from './../../shared/recipe.json';


@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.scss'],
})

export class RecipesComponentComponent implements OnInit, OnDestroy {

  recipes: any;

  wordSearch: string;
  smallRecipes: RecipeTest[];
  printedRecipes: RecipeTest[];

  isComplete = false;
  subscription$: Subscription;
  printedRecipesSubject$ = new BehaviorSubject<RecipeTest[]>([]);

  constructor() {
    // this.recipes = allRecipes;
    // console.log(this.recipes);

    this.smallRecipes = [
      new RecipeTest("2", "Scampi", "Ina Garten", 120, "Modified by reducing butter", "Preheat the oven to 425 degrees F, drain", ["2\/3 cup panko\r", "3 tablespoon olive oil\r"], [ "seafood", "shrimp"]),
      new RecipeTest("3", "Shrimp", "Garten", 30, "butter and salt", "Preheat, drain", ["2\/3 cup panko\r", "3 tablespoon olive oil\r"], [ "seafood", "shrimp"]),
      new RecipeTest("4", "Baked", "Ina Garten", 10, "Modified butter and salt", "Preheat the oven to 425 degrees F, drain", ["2\/3 cup panko\r", "3 tablespoon olive oil\r"], [ "seafood", "shrimp"])
    ];

    this.setObservable([...this.smallRecipes]);
    console.log(this.smallRecipes);
    console.log('toto');
    console.log(this.printedRecipes);
  }

  ngOnInit() {
    console.log('in ngoninit');
    this.subscription$ = this.getRecipeSubject().subscribe(
      (value: RecipeTest[]) => {
        // Next
        console.log('CallObservableComponent Next', value);
        this.printedRecipes = value;
      }, (error) => {
        // Error
        console.error('CallObservableComponent error', error);
      }, () => {
        // Complete
        console.log('CallObservableComponent Complete');
        this.isComplete = true;
      }
    );

  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    if (this.subscription$) {
      this.subscription$.unsubscribe();
      console.log('this.subscription$.unsubscribe');
    }
  }

  handleSearch(){
    console.log('Test ', 'Scampi'.includes(this.wordSearch));
    console.log(this.smallRecipes);
    console.log('toto--');
    console.log(this.printedRecipes);
    this.setObservable(this.printedRecipes.filter(recipe => recipe.name.toLowerCase().includes(this.wordSearch.toLowerCase())));
    console.log(this.printedRecipes);
  }

  getRecipeSubject(): Observable<RecipeTest[]> {
    return this.printedRecipesSubject$.asObservable();
  }

  setRecipeSubject(value: RecipeTest[]) {
    console.log('in setRecipeSubject', value);
    this.printedRecipesSubject$.next(value);
  }
/*
  clearRecipeSubject() {
//    this.printedRecipesSubject$.next();
  }
*/

  // Optional, as reminder
  errorRecipeSubject() {
    this.printedRecipesSubject$.error('Ca sent pas bon tout ça, il y a une erreur !');
  }

  // As reminder too
  completeRecipeSubject() {
    this.printedRecipesSubject$.complete();
  }

  // Observable part
  setObservable(recipes: RecipeTest[]) {
    console.log('setObservable ', recipes);
    this.setRecipeSubject(recipes);
  }

  /*
  clearObservable() {
    this.clearRecipeSubject();
  }*/

  setObservableError() {
    console.log('setObservableError');
    this.errorRecipeSubject();
  }

  setObservableComplete() {
    console.log('setObservableComplete');
    this.completeRecipeSubject();
  }
}
