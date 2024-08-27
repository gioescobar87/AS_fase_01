package proyecto_f1.backend.controller.Usuariocontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proyecto_f1.backend.service.Usuario.*;
import proyecto_f1.backend.model.Usuario.*;
import proyecto_f1.backend.ClasesValidacion.validacion;
import proyecto_f1.backend.ClasesValidacion.validacion.AuthResponse;
import proyecto_f1.backend.ClasesValidacion.jwtValida;
import java.util.List;

@RestController
@RequestMapping("/api/Usuario")
public class UsuarioController {


    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public Usuario crearUsuario(@RequestBody Usuario usuario) {
        return usuarioService.crearUsuario(usuario);
    }

    @GetMapping("/All")
    public List<Usuario> obtenerUsuarios() {
        System.out.println("Llego");
        return usuarioService.obtenerUsuarios();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Long id) {
        return usuarioService.obtenerUsuarioPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id, @RequestBody Usuario usuarioDetalles) {
        return ResponseEntity.ok(usuarioService.actualizarUsuario(id, usuarioDetalles));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable Long id) {
        usuarioService.eliminarUsuario(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public  ResponseEntity<AuthResponse> login(@RequestBody validacion.LoginRequest loginRequest) {
         boolean isValid =  usuarioService.validaCredenciales(loginRequest.getUsername(),loginRequest.getPassword());

        if (isValid) {
            // Genera un token JWT
            String token =   jwtValida.generateToken(loginRequest.getUsername());

            // Devuelve el token en la respuesta
            return ResponseEntity.ok(new validacion.AuthResponse(token));
        } else {
            return ResponseEntity.ok(new validacion.AuthResponse("invalido"));
        }
    }




}
