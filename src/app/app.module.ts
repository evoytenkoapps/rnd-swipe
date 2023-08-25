import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiButtonModule,
  TuiDialogModule,
  TuiLinkModule,
  TuiRootModule, TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiSheetDialogModule, TuiSheetModule } from '@taiga-ui/addon-mobile';
import { TemplateComponent } from './template/template.component';
import {TuiInputModule} from "@taiga-ui/kit";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AppComponent, TemplateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiSheetDialogModule,
    TuiButtonModule,
    TuiSheetModule,
    TuiLinkModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    CommonModule
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
