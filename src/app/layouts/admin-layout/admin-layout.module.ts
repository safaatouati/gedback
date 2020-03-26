import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuItem} from 'primeng/api';   
import {MatTooltipModule} from '@angular/material/tooltip';
import { DashboardComponent }       from '../../pages/Home/Home.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/Tools/Tools.component';
import { CartographyComponent }      from '../../pages/cartography/cartography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/search/search.component';
import { NotificationsComponent }   from '../../pages/Process_Sheet/Process_Sheet.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import {TableModule} from 'primeng/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import {  MatButtonModule, MatFormFieldModule } from '@angular/material';
import { ButtonModule } from 'primeng/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {DropdownModule} from 'primeng/dropdown';
import {MatRippleModule, MatCheckboxModule, MatInputModule,MatIconModule} from '@angular/material'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    TableModule,
    ButtonModule,
    MatRippleModule, MatCheckboxModule, MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    BreadcrumbModule,
    MatTooltipModule,
    InputTextModule,
    MatButtonModule,
    MatFormFieldModule,
    DropdownModule,
    MatProgressSpinnerModule,
    ProgressSpinnerModule

    
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    CartographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
  ],
  bootstrap: [DashboardComponent],
})

export class AdminLayoutModule {}
