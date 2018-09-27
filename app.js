const ui = new UI();

// Instantiate GitHub object
const gitHub = new GitHub();
// Search input
const searchUser = document.getElementById("searchUser");
// Search Input event Listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  // Validates userText value
  if (userText !== "") {
    // Make HTTP CALL
    gitHub.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        // Show Repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
