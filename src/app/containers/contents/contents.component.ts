import { Component } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent {
  cv:any=new Map()
   constructor(private cvService:CvService){
      console.log(cvService.api)
      this.cv.set(
        "objectives",[{name:"PFA STAGE",displayed:false},{name:"PFA STAGE 2",displayed:false},{name:"PFA STAGE 2",displayed:true},{name:"PFA STAGE 2",displayed:false}]

      )
      this.cv.set(
        "Moocs",[{name:"PFA STAGE",displayed:false},{name:"PFA STAGE 2",displayed:false},{name:"PFA STAGE 2",displayed:true},{name:"PFA STAGE 2",displayed:false}]
      )
      this.cv.set(
        "Academics",[{name:"PFA STAGE",displayed:false},{name:"PFA STAGE 2",displayed:false},{name:"PFA STAGE 2",displayed:true},{name:"PFA STAGE 2",displayed:false}]
      )
   }
}
