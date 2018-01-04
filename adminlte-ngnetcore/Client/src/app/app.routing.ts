export const routes = [
    { path: '', data: ['Dashboard1'], loadChildren: './pages/dashboard/home1/home1.module#Home1Module' },
    { path: 'home/v1', data: ['Dashboard1'], loadChildren: './pages/dashboard/home1/home1.module#Home1Module' },
    { path: 'home/v2', data: ['Dashboard2'], loadChildren: './pages/dashboard/home2/home2.module#Home2Module' },

    { path: '**', redirectTo: '/' }
];
