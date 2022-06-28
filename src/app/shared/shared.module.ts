import { RegexMarkDirective } from './../directives/regex-mark.directive';
import { FooterComponent } from './../footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';
import { ReplacePipe } from '../pipes/replace.pipe';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ReplacePipe,
    RegexMarkDirective
],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RegexMarkDirective
  ]
})
export class SharedModule { }
