import { Component } from '@angular/core';
import { TuiSheetDialogService } from '@taiga-ui/addon-mobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'rnd-swipe';

  constructor(private readonly sheets: TuiSheetDialogService) {

    this.sheets
      .open('Content', {
        label: 'Heading',
        offset: 48,
      })
      .subscribe();
  }
}
