import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercherCoursPageRoutingModule } from './rechercher-cours-routing.module';

import { RechercherCoursPage } from './rechercher-cours.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercherCoursPageRoutingModule,
    SharedModule
  ],
  declarations: [RechercherCoursPage]
})
export class RechercherCoursPageModule {}
