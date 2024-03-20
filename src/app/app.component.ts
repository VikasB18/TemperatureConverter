import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperatureConverterComponent} from './temperature-converter/temperature-converter.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemperatureConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temperature-converter';
}
