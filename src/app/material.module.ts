import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCarouselModule } from '@ngmodule/material-carousel';

const modules = [MatMenuModule, MatCarouselModule, MatButtonModule];
@NgModule({
    declarations: [
    ],
    imports: modules,
    exports: modules,
    providers: [],
})
export class MatModule {

}
