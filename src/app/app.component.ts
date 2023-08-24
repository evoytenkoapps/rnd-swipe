import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TuiSheetDialogService } from '@taiga-ui/addon-mobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sayHelloTemplate', { read: TemplateRef })
  sayHelloTemplate: TemplateRef<any>;

  constructor(private readonly sheets: TuiSheetDialogService) {}

  ngAfterViewInit(): void {
    this.sheets
      .open(this.sayHelloTemplate, {
        closeable: true,
        offset: 0,
      })
      .subscribe();
  }

  onShowBanks() {}
}
