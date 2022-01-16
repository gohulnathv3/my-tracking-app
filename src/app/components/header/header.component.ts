import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string='Task Tracker';
  showAddTask: boolean;
  subscription = Subscription: any;
  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.ontoggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}
