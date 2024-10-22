import { Routes } from '@angular/router';
import { HomeComponent } from '../containers/home/home.component';
import { TemplateRouteComponent } from '../components/template-route/template-route.component';
import { RedirectComponent } from '../components/redirect/redirect.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: RedirectComponent
            },
            {
                path: 'edit',
                component: TemplateRouteComponent
            },
            {
                path: 'cancel',
                component: TemplateRouteComponent
            },
            {
                path: 'delete',
                component: TemplateRouteComponent
            },
            {
                path: 'create',
                component: TemplateRouteComponent
            },
        ]
    }
];
