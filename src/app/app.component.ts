import { Component } from '@angular/core';
import { HttpRequestService } from './http-request/http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpService: HttpRequestService) {}
}
