function toggleForm() {
  const form = document.getElementById("loginForm");
  const title = document.getElementById("formTitle");

  if (title.textContent === "LOGIN") {
    title.textContent = "REGISTER";
    form.innerHTML = `
      <input type="text" placeholder="USERNAME" required>
      <input type="email" placeholder="EMAIL" required>
      <input type="password" placeholder="PASSWORD" required>
      <button type="submit">REGISTER</button>
      <p onclick="toggleForm()">Already have an account? Login</p>
    `;
  } else {
    title.textContent = "LOGIN";
    form.innerHTML = `
      <input type="text" placeholder="USERNAME" required>
      <input type="password" placeholder="PASSWORD" required>
      <button type="submit">LOGIN</button>
      <p onclick="toggleForm()">Don't have an account? Register</p>
    `;
  }
}
