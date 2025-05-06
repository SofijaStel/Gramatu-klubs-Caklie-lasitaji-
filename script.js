function addComment() {
    const name = document.getElementById('nameInput').value.trim();
    const comment = document.getElementById('commentInput').value.trim();
    const now = new Date().toLocaleString();

    if (name && comment) {
      const entry = {
        name: name,
        comment: comment,
        time: now
      };

      let comments = JSON.parse(localStorage.getItem('atsauksmes')) || [];
      comments.unshift(entry);
      localStorage.setItem('atsauksmes', JSON.stringify(comments));

      alert("Atsauksme saglabāta!");
      document.getElementById('nameInput').value = "";
      document.getElementById('commentInput').value = "";
    } else {
      alert("Lūdzu, aizpildi abus laukus!");
    }
  }