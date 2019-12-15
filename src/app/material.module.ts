import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';


const modules = [MatMenuModule, MatCarouselModule, MatCardModule, MatButtonModule, MatDialogModule];
@NgModule({
    declarations: [
    ],
    imports: modules,
    exports: modules,
    providers: [],
})
export class MatModule {

}
