import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const dashboardRoute = {
  path: '',
  loadChildren: () => import('./pages/dashboard/dashboard.module')
  .then(p => p.DashboardModule)
};

const fizzBuzzRoute = {
  path: '',
  loadChildren: () => import('./pages/fizz-buzz/fizz-buzz.module')
  .then(p => p.FizzBuzzModule)
};

const dashboardPath = 'dashboard';
const defaultRoute: string = dashboardPath;

const routes: Routes = [
  // Dashboard
  {
    path: '',
    children: [dashboardRoute]
  },
  {
    path: dashboardPath,
    children: [dashboardRoute]
  },

  // Fizz-buzz
  {
    path: 'fizz-buzz',
    children: [fizzBuzzRoute]
  },
  {
    path: 'fizzbuzz',
    children: [fizzBuzzRoute]
  },

  // Factorial
  {
    path: 'factorial',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/factorial/factorial.module')
        .then(p => p.FactorialModule)
      }
    ]
  },

  // ---- Unknown route ---- 
  {
    path: '**',
    redirectTo: defaultRoute,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
