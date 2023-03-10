import { Component, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent {
  collapse:boolean=true;
  @Input() objectives:any;
  @Input() index:any;
  @Input() title!:string | unknown;

  clicked(){
    this.collapse=!this.collapse
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.objectives, event.previousIndex, event.currentIndex);
  }
  display(i:number){
    this.objectives[i].displayed=! this.objectives[i].displayed;
  }

}
