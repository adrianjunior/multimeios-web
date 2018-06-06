import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatFormFieldModule,
         MatInputModule, MatSidenavModule, MatToolbarModule,
         MatListModule, MatCardModule, MatSelectModule,
         MatTabsModule, MatCheckboxModule, MatTableModule,
         MatSortModule, MatPaginatorModule, MatSnackBarModule,
         MatProgressSpinnerModule, MatMenuModule
        } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule,
              MatInputModule, MatSidenavModule, MatToolbarModule,
              MatListModule, MatCardModule, MatSelectModule,
              MatTabsModule, MatCheckboxModule, MatTableModule,
              MatSortModule, MatPaginatorModule, MatSnackBarModule,
              MatProgressSpinnerModule, MatMenuModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule,
              MatInputModule, MatSidenavModule, MatToolbarModule,
              MatListModule, MatCardModule, MatSelectModule,
              MatTabsModule, MatCheckboxModule, MatTableModule,
              MatSortModule, MatPaginatorModule, MatSnackBarModule,
              MatProgressSpinnerModule, MatMenuModule]
})

export class MaterialModule {}