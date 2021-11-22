import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {


  usuario:Usuario={
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
  submitted=false;


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }


  // guardar usuario
  saveUsuario():void{
   const data={ 
     cedula:this.usuario.cedula,  
    nombre: this.usuario.nombre,
    apellido:this.usuario.apellido,
    numPasaporte:this.usuario.numPasaporte,
    edad:this.usuario.edad,
    nacionalidad:this.usuario.nacionalidad,
    telefono:this.usuario.telefono,
    correo:this.usuario.correo,
    contrasenna:this.usuario.contrasenna,
    direccion:this.usuario.direccion   
   }

   this.usuarioService.create(data).subscribe({

    next:(res:any)=>{
      console.log(res);
      this.submitted=true;
    },
    error:(e:any)=> console.error(e)
   });
  }


  newUsuario():void{
    this.submitted=false;
    this.usuario={
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


  }






}
