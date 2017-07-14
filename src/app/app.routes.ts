import { RouterModule } from '@angular/router';
import { SuperPowersComponent } from './table/superpowers.component';
import { HomeComponent } from './table/home.component';
import { RichComponent } from './table/rich.component';
import { GeniousComponent } from './table/genious.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'sp', component: SuperPowersComponent},
  {path: 'rich', component: RichComponent},
  {path: 'genious', component: GeniousComponent},
];

export default RouterModule.forRoot(routes);
