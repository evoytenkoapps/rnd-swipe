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
  @ViewChild('savedBankTemplate', { read: TemplateRef })
  sayHelloTemplate: TemplateRef<any>;

  isSavedOpened = false;
  isBanksOpened = false;

  constructor(private readonly sheets: TuiSheetDialogService) {}

  ngAfterViewInit(): void {
    // this.sheets
    //   .open(this.sayHelloTemplate, {
    //     closeable: true,
    //     offset: 0,
    //   })
    //   .subscribe();
  }

  onShowBanks() {
    this.isBanksOpened = true;
    this.isSavedOpened = false;
  }

  onPay() {
    this.isSavedOpened = !this.isSavedOpened;
  }

  onPayApp() {
    this.isSavedOpened = false;
  }
}
