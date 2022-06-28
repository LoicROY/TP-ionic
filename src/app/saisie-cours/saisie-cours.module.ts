import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaisieCoursPageRoutingModule } from './saisie-cours-routing.module';

import { SaisieCoursPage } from './saisie-cours.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaisieCoursPageRoutingModule,
    SharedModule
  ],
  declarations: [SaisieCoursPage]
})
export class SaisieCoursPageModule {}
