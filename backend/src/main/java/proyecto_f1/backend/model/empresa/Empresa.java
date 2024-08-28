package proyecto_f1.backend.model.empresa;
import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Empresa {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEmpresa;

    private String nombre;
    private String direccion;
    private String nit;
    private int passwordCantidadMayusculas;
    private int passwordCantidadMinusculas;
    private int passwordCantidadCaracteresEspeciales;
    private int passwordCantidadCaducidadDias;
    private int passwordLargo;
    private int passwordIntentosAntesDeBloquear;
    private int passwordCantidadNumeros;
    private int passwordCantidadPreguntasValidar;
    private Date fechaCreacion;
    private String usuarioCreacion;
    private Date fechaModificacion;
    private String usuarioModificacion;
    public Long getIdEmpresa() {
        return idEmpresa;
    }
    public void setIdEmpresa(Long idEmpresa) {
        this.idEmpresa = idEmpresa;
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
    public String getNit() {
        return nit;
    }
    public void setNit(String nit) {
        this.nit = nit;
    }
    public int getPasswordCantidadMayusculas() {
        return passwordCantidadMayusculas;
    }
    public void setPasswordCantidadMayusculas(int passwordCantidadMayusculas) {
        this.passwordCantidadMayusculas = passwordCantidadMayusculas;
    }
    public int getPasswordCantidadMinusculas() {
        return passwordCantidadMinusculas;
    }
    public void setPasswordCantidadMinusculas(int passwordCantidadMinusculas) {
        this.passwordCantidadMinusculas = passwordCantidadMinusculas;
    }
    public int getPasswordCantidadCaracteresEspeciales() {
        return passwordCantidadCaracteresEspeciales;
    }
    public void setPasswordCantidadCaracteresEspeciales(int passwordCantidadCaracteresEspeciales) {
        this.passwordCantidadCaracteresEspeciales = passwordCantidadCaracteresEspeciales;
    }
    public int getPasswordCantidadCaducidadDias() {
        return passwordCantidadCaducidadDias;
    }
    public void setPasswordCantidadCaducidadDias(int passwordCantidadCaducidadDias) {
        this.passwordCantidadCaducidadDias = passwordCantidadCaducidadDias;
    }
    public int getPasswordLargo() {
        return passwordLargo;
    }
    public void setPasswordLargo(int passwordLargo) {
        this.passwordLargo = passwordLargo;
    }
    public int getPasswordIntentosAntesDeBloquear() {
        return passwordIntentosAntesDeBloquear;
    }
    public void setPasswordIntentosAntesDeBloquear(int passwordIntentosAntesDeBloquear) {
        this.passwordIntentosAntesDeBloquear = passwordIntentosAntesDeBloquear;
    }
    public int getPasswordCantidadNumeros() {
        return passwordCantidadNumeros;
    }
    public void setPasswordCantidadNumeros(int passwordCantidadNumeros) {
        this.passwordCantidadNumeros = passwordCantidadNumeros;
    }
    public int getPasswordCantidadPreguntasValidar() {
        return passwordCantidadPreguntasValidar;
    }
    public void setPasswordCantidadPreguntasValidar(int passwordCantidadPreguntasValidar) {
        this.passwordCantidadPreguntasValidar = passwordCantidadPreguntasValidar;
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
    public Date getFechaModificacion() {
        return fechaModificacion;
    }
    public void setFechaModificacion(Date fechaModificacion) {
        this.fechaModificacion = fechaModificacion;
    }
    public String getUsuarioModificacion() {
        return usuarioModificacion;
    }
    public void setUsuarioModificacion(String usuarioModificacion) {
        this.usuarioModificacion = usuarioModificacion;
    }

    // Getters y setters

    

}
