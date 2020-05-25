import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {


  private ofertas=[
    {
      id: "1",
      id_empresa:"HakunaMatataVegie",
      id_localidad:"Villaviciosa de Odon",
      id_sector:"Cocina",
      id_contrato:"Indefinido",
      id_jornada:"Completa",

      titulo: "Cocinero para restaurante vegano",
      descripcion: "",
      que_ofrece:"",
      salario:"24.000€ - 26.000€ brutos/año",
      fecha_alta:"12-05-2020",
      fecha_limite_inscripcion:"30-6-2020",
    },
    {
      id: "1",
      id_empresa:"HakunaMatataVegie",
      id_localidad:"Villaviciosa de Odon",
      id_sector:"Cocina",
      id_contrato:"Indefinido",
      id_jornada:"Completa",

      titulo: "Cocinero para restaurante vegano",
      descripcion: "",
      que_ofrece:"",
      salario:"24.000€ - 26.000€ brutos/año",
      fecha_alta:"12-05-2020",
      fecha_limite_inscripcion:"30-6-2020",
    },
    {
      id: "1",
      id_empresa:"HakunaMatataVegie",
      id_localidad:"Villaviciosa de Odon",
      id_sector:"Cocina",
      id_contrato:"Indefinido",
      id_jornada:"Completa",

      titulo: "Cocinero para restaurante vegano",
      descripcion: "",
      que_ofrece:"",
      salario:"24.000€ - 26.000€ brutos/año",
      fecha_alta:"12-05-2020",
      fecha_limite_inscripcion:"30-6-2020",
    },
    
  ]


  constructor() { }

  ngOnInit() {
  }

}
