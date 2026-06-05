const saveTokenFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  if (token) {
    localStorage.setItem("token", token);
    // Clean the token from URL
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};

export default saveTokenFromURL;