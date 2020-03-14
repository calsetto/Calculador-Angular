import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result: string = '';
  private preValue: string = '';
  private curValue: string = '';
   
  add(value:string)
  {
    if(this.result != '')
    {
      this.preValue = this.curValue;
      this.curValue = value;
    }
    if(value == 'AC')
    {
      this.result = '';
    }
    else if(value == '=')
    {
      this.result = eval(this.result);
    }
    else
    {
      this.result += value;
    }
  }

}
