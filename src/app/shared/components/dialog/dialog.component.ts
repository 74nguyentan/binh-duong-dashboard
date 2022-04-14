import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  Input,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { NbDialogService, NbDialogRef, NbDialogConfig } from '@nebular/theme';



@Component({
  selector: 'fh-dialog-header',
  template: '<ng-content></ng-content>'
})
export class DialogHeaderComponent { }
@Component({
  selector: 'fh-dialog-body',
  template: '<ng-content></ng-content>'
})
export class DialogBodyComponent {
}
@Component({
  selector: 'fh-dialog-footer',
  template: '<ng-content></ng-content>'
})
export class DialogFooterComponent { }

@Component({
  selector: 'fh-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit, OnDestroy {
  ///////////////
  opened = false;
  private _open: boolean;
  @Input() set open(val: boolean) {
    this._open = val;
    if (val) {
      if (!this.opened) {
        this.opened = true;
        this.openDialog({ ...this.userConfig, closeOnBackdropClick: false, closeOnEsc: false });
      }
    } else {
      this.close();
    }
  }
  get open() {
    return this._open;
  }
  @Input() userConfig?: Partial<NbDialogConfig<string | Partial<any>>>;
  @ViewChild('dialog', { static: true }) private dialog: TemplateRef<any>;
  @Input() style: CSSStyleSheet;
  @Output() closed = new EventEmitter();
  @Input() minWidth: string;
  @Input() maxWidth: string;
  @Input() width: string;
  get styles() {
    return {
      minWidth: this.minWidth,
      maxWidth: this.maxWidth || '80vw',
      width: this.width,
      maxHeight: '80vh'
    };
  }
  ///////////////
  private dialogRef: NbDialogRef<any>;

  constructor(
    private dialogService: NbDialogService,
  ) { }

  ngOnInit() {
  }

  openDialog(userConfig?: Partial<NbDialogConfig<string | Partial<any>>>) {
    this.dialogRef = this.dialogService.open(this.dialog, userConfig);
  }

  close() {
    this.closed.emit();
    this.dialogRef && this.dialogRef.close();
    this.opened = false;
  }

  ngOnDestroy() {
    this.close();
  }

}
