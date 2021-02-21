import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './_components/user-component/user-component.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DeleteDetailsComponent } from './delete-details/delete-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExamplesComponent } from './material-examples/material-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    GetDetailsComponent,
    PostDetailsComponent,
    DeleteDetailsComponent,
    UpdateDetailsComponent,
    MaterialExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonToggleModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
