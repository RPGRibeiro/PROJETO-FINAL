import { Component, OnInit } from '@angular/core';
import { Registro } from '../models/registro';
import { RegistroService } from '../services/registro.service';
import { Observable, of, pipe } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registro$: Observable<Registro[]>;

  displayedColumns = ['name', 'type', 'actions'];
  // registroService: RegistroService;

  constructor(
    private registroService: RegistroService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.registro = [
    //   { idService: 1, name: 'Garçom', type: 'Freelancer' }
    // this.registroService = new RegistroService();
    this.registro$ = this.registroService.listServices()
      .pipe(
        catchError(error => {
          this.onErrror('Ta dando erro aí vei...');
          return of([])
        })
      );
  }

  onErrror(errrorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errrorMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd() {
    console.log("onAdd");
    this.router.navigate(['new']);

  }


}
