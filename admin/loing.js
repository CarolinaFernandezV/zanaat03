// Abrir y cerrar modales
function abrirRegistroModal() {
    document.getElementById("registroModal").style.display = "block";
  }
  
  function cerrarRegistroModal() {
    document.getElementById("registroModal").style.display = "none";
  }
  
  function abrirLoginModal() {
    document.getElementById("loginModal").style.display = "block";
  }
  
  function cerrarLoginModal() {
    document.getElementById("loginModal").style.display = "none";
  }
  
  // Cambiar entre modales
  function cambiarAIniciarSesion() {
    cerrarRegistroModal();
    abrirLoginModal();
  }
  
  function cambiarARegistro() {
    cerrarLoginModal();
    abrirRegistroModal();
  }
  
  // Registro de cuenta
  document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const nuevoUsuario = { username, email, password };
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    const existe = usuarios.some(u => u.email === email);
    if (existe) {
      alert("Este correo ya está registrado.");
      return;
    }
  
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
    alert("Cuenta creada exitosamente.");
    document.getElementById("registroForm").reset();
    cerrarRegistroModal();
    abrirLoginModal(); // opcional: abrir login después del registro
  });
  
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;
  const pais = document.getElementById("pais").value;
  
  const nuevoUsuario = { username, email, password, telefono, direccion, pais };
  

  // Inicio de sesión
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(u => u.email === email && u.password === password);
  
    if (usuario) {
  alert(`Bienvenido, ${usuario.username}`);
  cerrarLoginModal();
  localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
  document.querySelector(".icono-perfil").style.display = "block";
}

       else {
      alert("Correo o contraseña incorrectos.");
    }
  });
  function abrirPerfilModal() {
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (!usuarioActivo) {
      alert("Debes iniciar sesión primero.");
      return;
    }
  
    document.getElementById("perfilNombre").value = usuarioActivo.username;
    document.getElementById("perfilCorreo").value = usuarioActivo.email;
    document.getElementById("perfilTelefono").value = usuarioActivo.telefono || "";
    document.getElementById("perfilDireccion").value = usuarioActivo.direccion || "";
    document.getElementById("perfilPais").value = usuarioActivo.pais || "";
  
    document.getElementById("perfilModal").style.display = "block";
  }
  
  function cerrarPerfilModal() {
    document.getElementById("perfilModal").style.display = "none";
  }
  
  // Guardar cambios al perfil
  document.getElementById("perfilForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById("perfilNombre").value;
    const correo = document.getElementById("perfilCorreo").value;
    const telefono = document.getElementById("perfilTelefono").value;
    const direccion = document.getElementById("perfilDireccion").value;
    const pais = document.getElementById("perfilPais").value;
  
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
  
    // Actualizar usuario en array
    usuarios = usuarios.map(u => {
      if (u.email === usuarioActivo.email) {
        return { username: nombre, email: correo, password: u.password, telefono, direccion, pais };
      }
      return u;
    });
  
    // Guardar cambios
    const usuarioActualizado = { username: nombre, email: correo, password: usuarioActivo.password, telefono, direccion, pais };
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioActualizado));
  
    alert("Perfil actualizado con éxito.");
    cerrarPerfilModal();
  });
  
  window.addEventListener("DOMContentLoaded", () => {
  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
  if (usuarioActivo) {
    document.querySelector(".icono-perfil").style.display = "block";
  }
});
