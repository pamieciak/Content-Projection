import { Component, VERSION } from '@angular/core';
import { from, delay, map } from 'rxjs';
import { TableComponent } from './table.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  characters$ = from(
    fetch('https://rickandmortyapi.com/api/character').then((res) => res.json())
  ).pipe(
    delay(1000),
    map(({ results }) => results)
  );
  locations$ = from(
    fetch('https://rickandmortyapi.com/api/location').then((res) => res.json())
  ).pipe(
    delay(2000),
    map(({ results }) => results)
  );
}
