import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { RecipesComponentComponent } from '../shared-module/recipes-component/recipes-component.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SharedModuleModule
  ],
  declarations: [
    Tab1Page,
    RecipesComponentComponent
  ]
})
export class Tab1PageModule {}
