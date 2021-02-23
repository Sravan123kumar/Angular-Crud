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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DeleteDetailsComponent } from './delete-details/delete-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExamplesComponent } from './material-examples/material-examples.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatTableModule} from '@angular/material/table';
import { JwPaginationModule } from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { XyzComponent} from './xyz/xyz.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PaginationExampleComponent } from './pagination-example/pagination-example.component';
import { UpdateDetails1Component } from './update-details1/update-details1.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    GetDetailsComponent,
    PostDetailsComponent,
    DeleteDetailsComponent,
    UpdateDetailsComponent,
    MaterialExamplesComponent,
    DialogExampleComponent,
    XyzComponent,
    PaginationExampleComponent,
    UpdateDetails1Component
    
   
   
    
  ],
  entryComponents:[DialogExampleComponent,XyzComponent],
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
    Ng2SearchPipeModule,
    Ng2OrderModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatSnackBarModule,
    NgxPaginationModule,
    MatDialogModule,
    MatTableModule,
    
    JwPaginationModule
    
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
