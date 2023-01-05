import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ExampleComponent } from './example.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, ExampleComponent],
  template: `<h1>Lista</h1>

  <app-example #exampleCmp></app-example>


  <ol *ngIf="!loading; else template || defaultLoading">
  <li *ngFor="let item of list">{{item.name}}</li>
  </ol>
<footer>Razem: {{!list.length ? '-': list.length}}
</footer>



<ng-template #defaultLoading>
<div>Loading...</div>
</ng-template>
  
  
  `,
  styles: [`h1 { font-family: sans-serif; }`],
})
export class TableComponent {
  @ContentChild('loading') template?: TemplateRef<any>;
  @ViewChild('defaultLoading', {
    static: true,
  })
  defaultLoading!: TemplateRef<any>;
  @ViewChild('exampleCmp') exampleCmp!: ExampleComponent;

  @Input() source$!: Observable<{ name: string }[]>;

  protected list: { name: string }[] = [];
  protected loading = false;

  private sub = new Subscription();

  ngOnInit() {
    console.log(this.defaultLoading);
    this.loading = true;
    const sub = this.source$.subscribe({
      next: (res) => {
        this.list = res.slice(0, 10);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
    this.sub.add(sub);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
