let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

function registrarUsuario() {
  const nombre = (document.getElementById('nombre') as HTMLInputElement).value.trim();
  const apellido = (document.getElementById('apellido') as HTMLInputElement).value.trim();
  const numero = (document.getElementById('numero') as HTMLInputElement).value.trim();
  const puesto = (document.getElementById('puesto') as HTMLSelectElement).value;

  if (!nombre || !apellido || !numero || !puesto) {
    alert("Completa todos los campos.");
    return;
  }

  const existe = usuarios.find(u => u.numero === numero);
  if (existe) {
    alert("Este número de empleado ya está registrado.");
    return;
  }

  usuarios.push({
    nombre,
    apellido,
    numero,
    puesto,
    contraseña: "1234"
  });

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  window.location.href = "borrador.html";
}

function iniciarSesion() {
  const numero = (document.getElementById('loginNumero') as HTMLInputElement).value.trim();
  const pass = (document.getElementById('loginPass') as HTMLInputElement).value.trim();

  const user = usuarios.find(u => u.numero === numero && u.contraseña === pass);

  if (user) {
    if (user.puesto === "Administrador") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "borrador.html";
    }
  } else {
    const mensaje = document.getElementById('loginMensaje');
    if (mensaje) mensaje.textContent = "Credenciales incorrectas.";
  }
}
