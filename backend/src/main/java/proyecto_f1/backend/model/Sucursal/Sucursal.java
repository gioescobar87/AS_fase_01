package proyecto_f1.backend.model.Sucursal;
import jakarta.persistence.*;
import proyecto_f1.backend.model.empresa.Empresa;

import java.util.Date;


@Entity
public class Sucursal {
         @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long idSucursal;
    
        private String nombre;
        private String direccion;
    
        @ManyToOne
        @JoinColumn(name = "idEmpresa")
        private Empresa empresa;
    
        private Date fechaCreacion;
        
        private String usuarioCreacion;
        
        private Date fechaModificacion;

        public Date getFechaModificacion() {
            return fechaModificacion;
        }
        public void setFechaModificacion(Date fechaModificacion) {
            this.fechaModificacion = fechaModificacion;
        }
        private String usuarioModificacion;
        
        public String getUsuarioModificacion() {
            return usuarioModificacion;
        }
        public void setUsuarioModificacion(String usuarioModificacion) {
            this.usuarioModificacion = usuarioModificacion;
        }
        public Long getIdSucursal() {
            return idSucursal;
        }
        public void setIdSucursal(Long idSucursal) {
            this.idSucursal = idSucursal;
        }
        public String getNombre() {
            return nombre;
        }
        public void setNombre(String nombre) {
            this.nombre = nombre;
        }
        public String getDireccion() {
            return direccion;
        }
        public void setDireccion(String direccion) {
            this.direccion = direccion;
        }
        public Empresa getEmpresa() {
            return empresa;
        }
        public void setEmpresa(Empresa empresa) {
            this.empresa = empresa;
        }
        public Date getFechaCreacion() {
            return fechaCreacion;
        }
        public void setFechaCreacion(Date fechaCreacion) {
            this.fechaCreacion = fechaCreacion;
        }
        public String getUsuarioCreacion() {
            return usuarioCreacion;
        }
        public void setUsuarioCreacion(String usuarioCreacion) {
            this.usuarioCreacion = usuarioCreacion;
        }
    
        // Getters y setters



}
