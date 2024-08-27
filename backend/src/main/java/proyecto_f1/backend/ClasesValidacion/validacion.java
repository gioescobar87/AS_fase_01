package proyecto_f1.backend.ClasesValidacion;

public  class validacion {

    public static class LoginRequest {
         public static String username;
         public  static String password;

        public  String getPassword() {
            return password;
        }

        public  void setPassword(String password) {
            this.password = password;
        }

        public String getUsername() {
            return username;
        }

        public  void setUsername(String username) {
            this.username = username;
        }
    }

    public static class AuthResponse {
        private String token;

        public  AuthResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }

}
