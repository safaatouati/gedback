import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/Home/Home.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/Tools/Tools.component';
import { CartographyComponent } from '../../pages/cartography/cartography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/search/search.component';
import { NotificationsComponent } from '../../pages/Process_Sheet/Process_Sheet.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'Home',
        children: [

            { path: '', component: DashboardComponent, pathMatch: 'full' },
            {
                path: 'cartography',
                children: [

                    { path: '', component: CartographyComponent, pathMatch: 'full' },
                   { path: 'Process_Sheet/:id/:idd',
                    children: [
                    { path: '', component: NotificationsComponent },
                    { path: 'table/:c', component: TableComponent },
                ]}
            ],
            },
        ]
    },
    { path: 'user', component: UserComponent },
 

    { path: 'icons', component: IconsComponent },
    { path: 'search', component: MapsComponent },
   // { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent }
];
