import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { MemberDetailComponent} from './member-detail/member-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [

{
	path: 'about',
	component: AboutComponent
},

{
	path: 'team',
	component: TeamComponent
},

{
	path: 'members/:id',
	component: MemberDetailComponent
},
{
    path: 'admin',
    component: AdminComponent
  }

 ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);