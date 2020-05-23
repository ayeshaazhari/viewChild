import { Component, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

 @ViewChild('refViewChild') refViewChild;

  getvalue(){
    console.log("input value");
    console.log(this.refViewChild.nativeElement.value);
  }
}
