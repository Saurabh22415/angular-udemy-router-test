import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import {Routes} from '@angular/router'

const appRoutes : Routes = [
    {path :'', component : HomeComponent},
    {path :'user', component : UserComponent},
    {path :'server', component : ServerComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ServersComponent, UsersComponent, EditServerComponent, ServerComponent, UserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServersService]
})
export class AppModule { }
