function login() {
    const password = document.getElementById("admin-password").value;
    if (password === "admin123") {
      document.getElementById("login-screen").classList.add("hidden");
      document.getElementById("admin-dashboard").classList.remove("hidden");
    } else {
      document.getElementById("login-error").textContent = "Incorrect password!";
    }
  }
  
  function logout() {
    document.getElementById("admin-dashboard").classList.add("hidden");
    document.getElementById("login-screen").classList.remove("hidden");
  }