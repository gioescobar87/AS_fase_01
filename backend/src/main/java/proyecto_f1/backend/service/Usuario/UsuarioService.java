package proyecto_f1.backend.service.Usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyecto_f1.backend.model.Usuario.*;
import proyecto_f1.backend.repository.Usuario.*;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario crearUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> obtenerUsuarios() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> obtenerUsuarioPorId(Long idUsuario) {
        return usuarioRepository.findById(idUsuario);
    }

    public Usuario actualizarUsuario(Long idUsuario, Usuario usuarioDetalles) {
        Usuario usuario = usuarioRepository.findById(idUsuario).orElseThrow();
        usuario.setNombre(usuarioDetalles.getNombre());
        usuario.setApellido(usuarioDetalles.getApellido());
        usuario.setCorreoElectronico(usuarioDetalles.getCorreoElectronico());
        usuario.setTelefonoMovil(usuarioDetalles.getTelefonoMovil());
        // Actualiza el resto de los campos según sea necesario
        return usuarioRepository.save(usuario);
    }

    public void eliminarUsuario(Long idUsuario) {
        usuarioRepository.deleteById(idUsuario);
    }

}
