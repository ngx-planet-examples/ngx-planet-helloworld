import { Component, OnInit } from '@angular/core';

import { Planet, SwitchModes } from '@worktile/planet';

@Component({
  selector: 'portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-planet-demo-portal';
      get loadingDone() {
        return this.planet.loadingDone;
    }

    constructor(
        private planet: Planet
    ) {}

    ngOnInit() {
        this.planet.setOptions({
            switchMode: SwitchModes.coexist,
            errorHandler: error => {
                console.error(`Failed to load resource, error:`, error);
            }
        });

        let mfes = ['highlightcard', 'footer', 'nextsteps', 'resources', 'terminal', 'toolbar', 'links' ];
        for (var mfe of mfes) {
          this.planet.registerApps([
              {
                  name: `${mfe}`,
                  hostParent: `#mfe-${mfe}-container`,
                  hostClass: `mfe-${mfe}`,
                  routerPathPrefix: '/',
                  resourcePathPrefix: `/mfe/${mfe}/`,
                  preload: true,
                  scripts: [
                      'main.js'
                  ],
                  styles: [
                      'styles.css'
                  ]
              }
          ]);
        }
        // start monitor route changes
        // get apps to active by current path
        // load static resources which contains javascript and css
        // bootstrap angular sub app module and show it
        this.planet.start();
    }
}
