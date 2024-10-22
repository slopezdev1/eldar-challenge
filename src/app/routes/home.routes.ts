import { Routes } from '@angular/router';
import { HomeComponent } from '../containers/home/home.component';
import { TemplateRouteComponent } from '../components/template-route/template-route.component';
import { RedirectComponent } from '../components/redirect/redirect.component';
import { isRoleAllowedGuard } from '../guards/is-role-allowed.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: RedirectComponent,
            },
            {
                path: 'edit',
                component: TemplateRouteComponent,
                canActivate: [isRoleAllowedGuard]
            },
            {
                path: 'cancel',
                component: TemplateRouteComponent,
                canActivate: [isRoleAllowedGuard]
            },
            {
                path: 'delete',
                component: TemplateRouteComponent,
                canActivate: [isRoleAllowedGuard]
            },
            {
                path: 'create',
                component: TemplateRouteComponent,
                canActivate: [isRoleAllowedGuard]
            },
        ]
    }
];
