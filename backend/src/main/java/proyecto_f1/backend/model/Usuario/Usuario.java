package proyecto_f1.backend.model.Usuario;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "USUARIO")  // Especificar el nombre exacto de la tabla existente
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long idUsuario;

    @Column(name = "Nombre")
    private String nombre;

    @Column(name = "Apellido")
    private String apellido;

    @Column(name = "FechaNacimiento")
    private Date fechaNacimiento;

    @Column(name = "Password")
    private String password;

    @Column(name = "UltimaFechaIngreso")
    private Date ultimaFechaIngreso;

    @Column(name = "IntentosDeAcceso")
    private int intentosDeAcceso;

    /*@Column(name = "EstadoActual")
    private String estadoActual;*/

    @Column(name = "UltimaFechaCambioPassword")
    private Date ultimaFechaCambioPassword;

    @Column(name = "CorreoElectronico")
    private String correoElectronico;

    @Column(name = "Fotografia")
    private byte[] fotografia;

    @Column(name = "TelefonoMovil")
    private String telefonoMovil;

    @Column(name = "IdGenero")
    private Long idGenero;

    @Column(name = "IdSucursal")
    private Long idSucursal;

    @Column(name = "IdStatusUsuario")
    private Long idStatusUsuario;

    @Column(name = "fecha_creacion")
    private Date fechaCreacion;

    @Column(name = "FechaModificacion")
    private Date fechaModificacion;

    @Column(name = "UsuarioCreacion")
    private String usuarioCreacion;

    @Column(name = "UsuarioModificacion")
    private String usuarioModificacion;

    @Column(name = "SesionActual")
    private String sesionActual;

    @Column(name  = "RequiereCambiarPassword")
    private int requiereCambiarPassword;

    // Getters y Setters

    public String getSesionActual(){
        return this.sesionActual;
    }
    public void setSesionActual(String sesionActual){
       this.sesionActual =  sesionActual;
    }

    public int getRequiereCambiarPassword(){
        return this.requiereCambiarPassword;
    }
    public void setRequiereCambiarPassword(int requiereCambiarPassword){

        this.requiereCambiarPassword = requiereCambiarPassword;
    }
    

    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getUltimaFechaIngreso() {
        return ultimaFechaIngreso;
    }

    public void setUltimaFechaIngreso(Date ultimaFechaIngreso) {
        this.ultimaFechaIngreso = ultimaFechaIngreso;
    }

    public int getIntentosDeAcceso() {
        return intentosDeAcceso;
    }

    public void setIntentosDeAcceso(int intentosDeAcceso) {
        this.intentosDeAcceso = intentosDeAcceso;
    }

    /*public String getEstadoActual() {
        return estadoActual;
    }

    public void setEstadoActual(String estadoActual) {
        this.estadoActual = estadoActual;
    }*/

    public Date getUltimaFechaCambioPassword() {
        return ultimaFechaCambioPassword;
    }

    public void setUltimaFechaCambioPassword(Date ultimaFechaCambioPassword) {
        this.ultimaFechaCambioPassword = ultimaFechaCambioPassword;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public byte[] getFotografia() {
        return fotografia;
    }

    public void setFotografia(byte[] fotografia) {
        this.fotografia = fotografia;
    }

    public String getTelefonoMovil() {
        return telefonoMovil;
    }

    public void setTelefonoMovil(String telefonoMovil) {
        this.telefonoMovil = telefonoMovil;
    }

    public Long getIdGenero() {
        return idGenero;
    }

    public void setIdGenero(Long idGenero) {
        this.idGenero = idGenero;
    }

    public Long getIdSucursal() {
        return idSucursal;
    }

    public void setIdSucursal(Long idSucursal) {
        this.idSucursal = idSucursal;
    }

    public Long getIdStatusUsuario() {
        return idStatusUsuario;
    }

    public void setIdStatusUsuario(Long idStatusUsuario) {
        this.idStatusUsuario = idStatusUsuario;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaModificacion() {
        return fechaModificacion;
    }

    public void setFechaModificacion(Date fechaModificacion) {
        this.fechaModificacion = fechaModificacion;
    }

    public String getUsuarioCreacion() {
        return usuarioCreacion;
    }

    public void setUsuarioCreacion(String usuarioCreacion) {
        this.usuarioCreacion = usuarioCreacion;
    }

    public String getUsuarioModificacion() {
        return usuarioModificacion;
    }

    public void setUsuarioModificacion(String usuarioModificacion) {
        this.usuarioModificacion = usuarioModificacion;
    }
}
