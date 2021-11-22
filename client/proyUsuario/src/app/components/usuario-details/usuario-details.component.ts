import { Component, Input, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.css']
})
export class UsuarioDetailsComponent implements OnInit {

  @Input() viewMode = false;
  

@Input() currentUsuario:Usuario={
  cedula:0,  
  nombre: "",
  apellido: "",
  numPasaporte:0,
  edad:0,
  nacionalidad:"",
  telefono:0,
  correo:"",
  contrasenna:"",
  direccion:""


}

message="";

  constructor(
    private usuarioService:UsuarioService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
console.log("Prueba");
if(!this.viewMode){
  this.message="";
  this.getUsuario(this.route.snapshot.params["id"])
}

  }


  getUsuario(id:String):void{
    this.usuarioService.get(id).subscribe({
      next: (data:any)=>{
        this.currentUsuario=data;
        console.log(data);
      },
      error:(e:any)=>console.log(e)
    })
  }

  updateUsuario():void{
    this.message="";
    this.usuarioService.update(this.currentUsuario._id,this.currentUsuario).subscribe({
      next:(res)=>{
        console.log(res);
        this.message=res.message? res.message:"El usuario ha sido modificado"
      },
      error:(e)=>console.log(e)
    });
    
  }


  deleteUsuario(): void {
    this.usuarioService.delete(this.currentUsuario._id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/usuarios|']);
        },
        error: (e) => console.error(e)
      });
      this.viewMode =true;
      this.currentUsuario._id = false;
  }


}
