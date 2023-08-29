import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TuiSheetDialogService } from '@taiga-ui/addon-mobile';
import { Subject, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('savedBankTemplate', { read: TemplateRef })
  savedBankTemplate: TemplateRef<any>;

  @ViewChild('banksTemplate', { read: TemplateRef })
  banksTemplate: TemplateRef<any>;

  // @ViewChild('banksDiv', { read: ElementRef })
  // banksDiv: ElementRef;

  @ViewChild('mainContent', { read: ElementRef })
  mainContent: ElementRef;

  isSavedOpened = false;
  isBanksOpened = false;

  showDialog$ = new Subject();

  bankListOriginal = [...Array(120)].map(
    (name, index) => 'Банк номер ' + (index + 1),
  );
  bankList = [...this.bankListOriginal];

  inputFormControl = new FormControl('');

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

    this.inputFormControl.valueChanges.subscribe((value) => {
      if (value) {
        this.bankList = this.bankListOriginal.filter((bank) =>
          bank.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()),
        );
      }
      if (value === '') {
        this.bankList = [...this.bankListOriginal];
      }
    });
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
    console.log('onInputClick');
    this.mainContent.nativeElement.style.height =
      'calc((var(--pf-mobileViewPortHeight, 1vh) * 100) - 85px)';
  }

  ngOnInit(): void {
    /*
       На мобильных браузерах в высоту вьюпорта вставляется адерсная строка, что мешает верстке
       https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
      */
    const mobileViewPortHeight = window.innerHeight * 0.01;
    const viewPortPropName = 'pf-mobileViewPortHeight';

    this.addCssProperty(viewPortPropName, mobileViewPortHeight);

    // Чтобы не лагала верстка в мобильном браузере когда прячется адресная строка
    window.addEventListener('resize', () => {
      this.addCssProperty(viewPortPropName, mobileViewPortHeight);
    });
  }

  private addCssProperty(name: string, px: number) {
    document.documentElement.style.setProperty(`--${name}`, `${px}px`);
  }
}
