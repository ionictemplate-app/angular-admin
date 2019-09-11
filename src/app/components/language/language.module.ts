import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatMenuModule} from '@angular/material';



@NgModule({
  declarations: [LanguageComponent],
  exports: [
    LanguageComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class LanguageModule { }
