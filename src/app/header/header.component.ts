import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  TemplateRef
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @ViewChild("login", { static: false })
  login: TemplateRef<any>;
  selected = false;
  selectBranch = false;
  commonHeader: boolean;
  forgot: boolean;
  dialogRef: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    this.forgot = true;
    this.dialogRef = this.dialog.open(this.login, {
      width: "325px",
      data: {}
    });

    this.dialogRef.afterClosed().subscribe(() => {
      // console.log('The dialog was closed');
    });
  }

  Forgot(value: any) {
    this.forgot = value;
  }

  closeDialog() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  common() {
    const headerBar = document.getElementById("navbar");
    const headerimg = document.getElementById("imgNav");
    const headerbut = document.getElementById("signup");
    headerBar.classList.add("sticky-header");
    headerimg.classList.add("logo-class-header");
    headerbut.classList.add("button-color-header");
    this.commonHeader = true;
    // this.closeDialog();
  }

  home() {
    this.commonHeader = false;
    const headerBar = document.getElementById("navbar");
    const headerimg = document.getElementById("imgNav");
    const headerbut = document.getElementById("signup");
    headerBar.classList.remove("sticky-header");
    headerimg.classList.remove("logo-class-header");
    headerbut.classList.remove("button-color-header");
  }
}
