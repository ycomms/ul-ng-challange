import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const dashboardPath = 'dashboard';

const routes: Routes = [
  // Dashboard
  {
    path: '',
    redirectTo: dashboardPath
  },
  {
    path: dashboardPath,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module')
        .then(p => p.DashboardModule)
      }
    ]
  },

  // Fizz-buzz
  {
    path: 'fizzbuzz',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/fizz-buzz/fizz-buzz.module')
        .then(p => p.FizzBuzzModule)
      }
    ]
  },
  {
    path: 'fizz-buzz',
    redirectTo: 'fizzbuzz'
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
    redirectTo: dashboardPath,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
