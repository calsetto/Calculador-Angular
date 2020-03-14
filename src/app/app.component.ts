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
  public history:string[]=[];
  public array:string;

  historial()
  {
    this.array = localStorage.getItem('HISTORIAL');
    this.array = JSON.parse(this.array);
  }

   
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
      this.history.push(this.result);
      console.log(this.history)
      localStorage.setItem('HISTORIAL', JSON.stringify(this.history));
    }
    else
    {
      this.result += value;
    }
  }

}
