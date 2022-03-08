import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent implements OnInit, AfterViewInit {

  value = '';

  @ViewChild('datepicker')
  el!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {

    $(this.el.nativeElement).datepicker({
      dateFormat: 'yy-mm-dd',
      onSelect: (dateText:string) => {
        this.value = dateText;
      }
    });

  }

  ngOnInit(): void {}
}
