import { HttpClient } from '@angular/common/http';
import { Component, Input,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg',
  template: `<span [ngStyle]="{'width':width}"  [class]="class" [innerHTML]="svgIcon"></span>`,
  styleUrls: ['./svg.component.css'],
})
export class SvgComponent  implements OnInit{
  @Input()
  public name?: string;

  @Input()
  public class?: string;
  @Input()
  public color?:string

  @Input()
  public width?:string;
  public svgIcon: any;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {

  }

  public ngOnChanges(): void {
    if (!this.name) {
      this.svgIcon = '';
      return;
    }

    this.httpClient
      .get(`assets/icons/${this.name}.svg`, { responseType: 'text' })
      .subscribe((value) => {
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
      });
  }
}
