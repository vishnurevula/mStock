import { Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from "./menu-component/menu-component.component";

const appRoutes : Routes=[
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'companiesList',
        component: CompaniesListComponent
    },
    {
        path: 'loginComponent',
        component: LoginComponent

    }
]

export default appRoutes;