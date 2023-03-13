import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 1, imageUrl: 'assets/to/holi' },
          { title: 'Card 2', cols: 2, rows: 1, imageUrl: 'path/to/image2' },
          { title: 'Card 3', cols: 2, rows: 1, imageUrl: 'path/to/image3' },
          { title: 'Card 4', cols: 2, rows: 1, imageUrl: 'path/to/image4' }
        ];
      } else {
        return [
          { title: 'Card 2', cols: 2, rows: 1, imageUrl: 'path/to/image1' },
          { title: 'Card 2', cols: 1, rows: 1, imageUrl: 'path/to/image6' },
          { title: 'Card 3', cols: 1, rows: 2, imageUrl: 'path/to/image7' },
          { title: 'Card 4', cols: 1, rows: 1, imageUrl: 'path/to/image8' }
        ];
      }
    })
  );
  

  constructor(private breakpointObserver: BreakpointObserver) {}
}
