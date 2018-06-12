import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatFormFieldModule,
         MatInputModule, MatSidenavModule, MatToolbarModule,
         MatListModule, MatCardModule, MatSelectModule,
         MatTabsModule, MatCheckboxModule, MatTableModule,
         MatSortModule, MatPaginatorModule, MatSnackBarModule,
         MatProgressSpinnerModule, MatMenuModule, MatDialogModule,
         MatGridListModule, MatStepperModule
        } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule,
              MatInputModule, MatSidenavModule, MatToolbarModule,
              MatListModule, MatCardModule, MatSelectModule,
              MatTabsModule, MatCheckboxModule, MatTableModule,
              MatSortModule, MatPaginatorModule, MatSnackBarModule,
              MatProgressSpinnerModule, MatMenuModule, MatDialogModule,
              MatGridListModule, MatStepperModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule,
              MatInputModule, MatSidenavModule, MatToolbarModule,
              MatListModule, MatCardModule, MatSelectModule,
              MatTabsModule, MatCheckboxModule, MatTableModule,
              MatSortModule, MatPaginatorModule, MatSnackBarModule,
              MatProgressSpinnerModule, MatMenuModule, MatDialogModule,
              MatGridListModule, MatStepperModule], 
})

export class MaterialModule {}