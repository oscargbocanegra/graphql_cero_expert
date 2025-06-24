import { RESTDataSource } from "apollo-datasource-rest";

// Clase base con configuración común
export class F1 extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.openf1.org/v1/";
  }

  // Aquí solo van métodos compartidos o comunes
  // Los métodos específicos van en sus clases especializadas
}