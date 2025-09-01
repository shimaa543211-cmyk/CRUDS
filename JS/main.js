var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var submitBtn = document.getElementById("submitBtn");
var tableBody = document.getElementById("tableBody");

var bookmarks = [];

// Add bookmark
submitBtn.addEventListener("click", function () {
  var name = siteNameInput.value.trim();
  var url = siteUrlInput.value.trim();

  if (name === "" || url === "") {
    alert("⚠️ من فضلك املى الحقول");
    return;
  }

  var bookmark = { name: name, url: url };
  bookmarks.push(bookmark);
  displayBookmarks();
  clearInputs();
});

// Display bookmarks
function displayBookmarks() {
  var cartoona = "";
  for (var i = 0; i < bookmarks.length; i++) {
    cartoona += `
      <tr>
        <td>${i + 1}</td>
        <td>${bookmarks[i].name}</td>
        <td><a href="${bookmarks[i].url}" target="_blank" class="visit-btn">Visit</a></td>
        <td><button onclick="deleteBookmark(${i})" class="delete-btn">Delete</button></td>
      </tr>
    `;
  }
  tableBody.innerHTML = cartoona;
}

// Delete bookmark
function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  displayBookmarks();
}

// Clear input fields
function clearInputs() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}
