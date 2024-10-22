import { Routes } from '@angular/router';
import { isAdminGuard } from './guards/is-admin.guard';
import { NotAllowedComponent } from './components/not-allowed/not-allowed.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./routes/auth.routes').then(container => container.routes)
    },
    {
        path: 'managment',
        loadChildren: () => import('./routes/config.routes').then(container => container.routes),
        canActivate: [isAdminGuard]
    },
    {
        path: 'home',
        loadChildren: () => import ('./routes/home.routes').then(container => container.routes),
    },
    {
        path: 'not-allowed',
        component: NotAllowedComponent
    }
    
];
