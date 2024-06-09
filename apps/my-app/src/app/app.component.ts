import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyLibComponent } from '@my-workspace/my-lib';

@Component({
  standalone: true,
  imports: [RouterModule, MyLibComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
}
