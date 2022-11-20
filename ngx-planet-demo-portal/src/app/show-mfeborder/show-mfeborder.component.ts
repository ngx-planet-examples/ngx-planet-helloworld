import { Component, OnInit } from '@angular/core';
import { GlobalEventDispatcher } from '@worktile/planet';

@Component({
  selector: 'portal-show-mfeborder',
  templateUrl: './show-mfeborder.component.html',
  styleUrls: ['./show-mfeborder.component.scss'],
})
export class ShowMFEBorderComponent implements OnInit {
  window = window;
  mfeBorder: boolean = false ;

  constructor(private globalEventDispatcher: GlobalEventDispatcher) {}

  ngOnInit(): void {}

  toggleMFEBorder() {
    this.mfeBorder = !this.mfeBorder;
    this.globalEventDispatcher.dispatch('show-mfe-border', this.mfeBorder);
  }
}
