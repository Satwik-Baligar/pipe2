import { Component } from '@angular/core';
import { Observable,Observer } from 'rxjs';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  a=Date();
  timeChange=new Observable<string>((Observer:Observer<string>)=>{setInterval(()=>Observer.next(new Date().toString()),1000);})
}



