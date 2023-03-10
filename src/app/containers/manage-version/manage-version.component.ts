import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manage-version',
  templateUrl: './manage-version.component.html',
  styleUrls: ['./manage-version.component.css'],
})
export class ManageVersionComponent {
  version: string = 'v1';
  mode: MODE = MODE.display;
  inputValue: string = '';
  @ViewChild('v') input!: ElementRef<HTMLInputElement>;
  hey() {
    console.log('stop prop');
  }
  @HostListener('document:click', ['$event'])
  clickout() {
    console.log(this.clickout);
    this.mode = MODE.display;
  }
  constructor() {}
  edit() {
    this.mode = MODE.edit;
    console.log(this.mode);
    console.log(this.input);

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 0);
  }
  saveVersionName(value: string) {
    console.log('ddddddddddddddddddddddddddddinputValue');
    this.mode = MODE.display;
    this.version = value;
  }
}

enum MODE {
  edit = 'edit',
  display = 'display',
}
