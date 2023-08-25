import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateComponent {
  @Input() userName: string;
}
