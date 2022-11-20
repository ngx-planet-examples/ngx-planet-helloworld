import { Component, OnInit } from '@angular/core';
import { GlobalEventDispatcher } from '@worktile/planet';

@Component({
  selector: 'toolbar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-planet-demo-toolbar';

  border = false;

  constructor(private globalEventDispatcher: GlobalEventDispatcher) {}

  ngOnInit(): void {
    this.globalEventDispatcher.register<boolean>("show-mfe-border").subscribe(
      (payload) => { this.border = payload; }
    )
  }
}
