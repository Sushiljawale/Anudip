import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  
  
//  test:string = "Robert Doney";
//  day = Date();
//  rupee = 400000;
//  obj={Name:"Sushil",Age:25};
//  per:number = 15/100;
//  num = 3.145;
//  arr:string[]=['a','b','d','c','f'];
//  km:number=500;


}
