import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () => import('./routes/auth.routes').then(container => container.routes)
    },
    {
        path: 'managment',
        loadChildren: () => import('./routes/config.routes').then(container => container.routes)
    },
    {
        path: 'home',
        loadChildren: () => import ('./routes/home.routes').then(container => container.routes)
    }
    
];
