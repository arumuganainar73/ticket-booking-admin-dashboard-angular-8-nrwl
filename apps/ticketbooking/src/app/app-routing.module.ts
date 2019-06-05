import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: '../../../../libs/home-slider/src/lib/home-slider.module#HomeSliderModule'
    },
    {
        path: 'product/:id',
        loadChildren: '../../../../libs/product-lists/src/lib/product-lists.module#ProductListsModule'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
