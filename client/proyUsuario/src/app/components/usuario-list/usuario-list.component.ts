import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios?: Usuario[];
  currentUsuario: Usuario = {};
  currentIndex = -1;
  title = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.retrieveUsuarios();


  }


  retrieveUsuarios():void{
this.usuarioService.getAll().subscribe({
  next:(data)=>{
    this.usuarios=data;
    console.log(data);
  },
  error:(e)=>console.error(e)
})

  }

  refreshList():void{
    this.retrieveUsuarios();
this.currentUsuario={};
this.currentIndex=-1;
  }

  setActiveUser(user: Usuario,index:number):void{
    console.log("setActiveUser","user");
    this.currentUsuario=user;
    this.currentIndex=index;


  }




}



