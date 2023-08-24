import {Component, TemplateRef, ViewChild} from '@angular/core';
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
  @ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate:TemplateRef<any>;
  open = false;

  readonly options: Partial<TuiSheetDialogOptions> = {
    label: 'Alexander Inkin',
    closeable: false,
  };

  constructor(private readonly sheets: TuiSheetDialogService) {
    this.sheets
      .open('Content', {
        label: 'Heading',
        offset: 48,
      })
      .subscribe();
  }
}
