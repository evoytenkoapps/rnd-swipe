import {
  AfterViewInit,
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TuiSheetDialogService } from '@taiga-ui/addon-mobile';
import { finalize, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('savedBankTemplate', { read: TemplateRef })
  savedBankTemplate: TemplateRef<any>;

  @ViewChild('banksTemplate', { read: TemplateRef })
  banksTemplate: TemplateRef<any>;

  @ViewChild('banksDiv', { read: ElementRef })
  banksDiv: ElementRef;

  isSavedOpened = false;
  isBanksOpened = false;

  templateOptions = { stops: [] };
  showDialog$ = new Subject();

  constructor(private readonly sheets: TuiSheetDialogService) {}

  ngAfterViewInit(): void {
    this.showDialog$
      .pipe(
        switchMap(() =>
          this.sheets.open(this.banksTemplate, {
            closeable: true,
          }),
        ),
      )
      .subscribe();
  }

  onShowBanks() {
    this.isSavedOpened = false;
    this.showDialog$.next(undefined);
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

    this.banksDiv.nativeElement.style.transition = 'height 0.2s ease-out';
    this.banksDiv.nativeElement.style.height = '100vh';
  }
}
