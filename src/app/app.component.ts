import { Component } from '@angular/core';
import {
  TuiSheetDialogOptions,
  TuiSheetDialogService,
  TuiSheetOptions,
} from '@taiga-ui/addon-mobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  open = false;

  readonly options: Partial<TuiSheetDialogOptions> = {
    label: 'Alexander Inkin',
    closeable: false,
  };
}
