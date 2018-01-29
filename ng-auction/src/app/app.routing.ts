import { Route } from '@angular/router'

export const routes: Route[] = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    }
]