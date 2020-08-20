import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponentComponent } from './recipes-component/recipes-component.component';
import { RecipeModalComponent } from './recipe-modal/recipe-modal.component';



@NgModule({
  declarations: [
    RecipeModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModuleModule { }
