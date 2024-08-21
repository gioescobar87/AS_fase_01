

export interface Usuario{
    idUsuario?: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  password: string;
  ultimaFechaIngreso: Date;
  intentosDeAcceso: number;
  estadoActual?: string; // Puedes agregarlo si lo habilitas más adelante
  ultimaFechaCambioPassword: Date;
  correoElectronico: string;
  fotografia: string; // Cambiado a string para base64 si usas imágenes
  telefonoMovil: string;
  idGenero: number;
  idSucursal: number;
  idStatusUsuario: number;
  fechaCreacion: Date;
  fechaModificacion: Date;
  usuarioCreacion: string;
  usuarioModificacion: string;
}