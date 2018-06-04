import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatFormFieldModule,
         MatInputModule, MatSidenavModule, MatToolbarModule,
         MatListModule, MatCardModule, MatSelectModule,
         MatTabsModule, MatCheckboxModule, MatTableModule,
         MatSortModule, MatPaginatorModule, MatSnackBarModule,
         MatProgressSpinnerModule
        } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule,
              MatInputModule, MatSidenavModule, MatToolbarModule,
              MatListModule, MatCardModule, MatSelectModule,
              MatTabsModule, MatCheckboxModule, MatTableModule,
              MatSortModule, MatPaginatorModule, MatSnackBarModule,
              MatProgressSpinnerModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule,
              MatInputModule, MatSidenavModule, MatToolbarModule,
              MatListModule, MatCardModule, MatSelectModule,
              MatTabsModule, MatCheckboxModule, MatTableModule,
              MatSortModule, MatPaginatorModule, MatSnackBarModule,
              MatProgressSpinnerModule]
})

export class MaterialModule {}