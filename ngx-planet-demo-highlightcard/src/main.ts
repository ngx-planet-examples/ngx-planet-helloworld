import { enableProdMode, NgModuleRef, Type, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { PlanetPortalApplication, defineApplication } from '@worktile/planet';

if (environment.production) {
    enableProdMode();
}

defineApplication('highlightcard', {
    template: `<highlightcard-root class="highlightcard-root"></highlightcard-root>`,
    bootstrap: (portalApp: PlanetPortalApplication) => {
        return platformBrowserDynamic([
            {
                provide: PlanetPortalApplication,
                useValue: portalApp
            }
        ])
            .bootstrapModule(AppModule)
            .then(appModule => {
                return appModule;
            })
            .catch(error => {
                console.error(error);
                return null;
            });
    }
});
