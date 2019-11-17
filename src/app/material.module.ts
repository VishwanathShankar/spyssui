import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const modules = [MatMenuModule, MatButtonModule];
@NgModule({
    declarations: [
    ],
    imports: modules,
    exports: modules,
    providers: [],
})
export class MatModule {

}
