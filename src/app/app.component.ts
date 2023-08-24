import {
  AfterViewInit,
  Component,
  ElementRef,
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

  @ViewChild('banksTemplate', { read: ElementRef })
  banksTemplate: ElementRef;

  isSavedOpened = false;
  isBanksOpened = false;

  templateOptions = { stops: [] };

  constructor(private readonly sheets: TuiSheetDialogService) {}

  ngAfterViewInit(): void {
    this.sheets
      .open(this.sayHelloTemplate, {
        closeable: true,
        offset: 0,
        stops: ['10rem'],
      })
      .subscribe({
        next(x) {
          console.log('got value ' + x);
        },
        error(err) {
          console.error('something wrong occurred: ' + err);
        },
        complete() {
          console.log('done');
        },
      });
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

  onInputClick() {
    // @ts-ignore
    this.templateOptions = { stops: ['100rem', '100rem'] };
    console.log(this.templateOptions);

    this.banksTemplate.nativeElement.style.transition = 'height 0.2s ease-out';
    this.banksTemplate.nativeElement.style.height = '100vh';
  }
}
