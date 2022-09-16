const selectButtonElements = document.getElementsByClassName('select_btn');

for (let i = 0; i < selectButtonElements.length; i++) {
  selectButtonElements[i].addEventListener('click', function (event) {
    const playerNameElement = event.target.parentNode.children[0];
    const playerName = playerNameElement.innerText;
    const selectedPlayerNamesElements = document.getElementById(
      'selected_player_names'
    );
    const seletedPlayerElement = document.createElement('li');
    seletedPlayerElement.className = 'my-3';
    selectedPlayerNamesElements.appendChild(seletedPlayerElement);
    seletedPlayerElement.innerText = playerName;
    selectButtonElements[i].setAttribute('disabled', 'true');
    if (selectedPlayerNamesElements.childNodes.length === 5) {
      for (let i = 0; i < selectButtonElements.length; i++) {
        selectButtonElements[i].setAttribute('disabled', 'true');
      }
      alert("5 player added you can't add more");
    }
  });
}
