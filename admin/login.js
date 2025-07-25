// Inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Credenciales de administrador
  const adminEmail = "admin@zanaat.com";
  const adminPassword = "admin123";

  // Verifica si es el administrador
  if (email === adminEmail && password === adminPassword) {
    const admin = { username: "Administrador", email: adminEmail, isAdmin: true };
    localStorage.setItem("usuarioActivo", JSON.stringify(admin));
    Swal.fire("Bienvenido", "Has iniciado sesión como Administrador", "success").then(() => {
      cerrarLoginModal();
      location.href = "admin.html"; // Redirige al panel de administrador
    });
    return;
  }
});
