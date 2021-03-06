import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material";
import { MatListModule } from "@angular/material/list";

// tslint:disable-next-line: max-line-length
const modules = [
  MatMenuModule,
  MatCarouselModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatListModule
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
  providers: []
})
export class MatModule { }
