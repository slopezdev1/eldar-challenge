import { Routes } from '@angular/router';
import { SettingsComponent } from '../containers/settings/settings.component';
import { UserComponent } from '../components/user/user.component';

export const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
    },
    {
        path: 'create',
        component: UserComponent
    },
    {
        path: 'edit/:id',
        component: UserComponent
    }
        
];
