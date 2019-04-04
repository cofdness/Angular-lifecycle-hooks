import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SizeChangeComponent } from './components/size-change/size-change.component';
import { PeekABooComponent } from './components/peek-a-boo/peek-a-boo.component';
import { PeekABooParentComponent } from './components/peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooChildComponent } from './components/peek-a-boo-child/peek-a-boo-child.component';
import { SpyDirective } from './directives/spy.directive';
import { SpyComponent } from './components/spy/spy.component';
import { OnChangeComponent } from './components/on-change/on-change.component';
import { OnChangeParentComponent } from './components/on-change-parent/on-change-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    SizeChangeComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    PeekABooChildComponent,
    SpyDirective,
    SpyComponent,
    OnChangeComponent,
    OnChangeParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
