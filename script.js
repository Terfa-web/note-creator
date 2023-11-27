const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

let staleNotes = localStorage.getItem('notes')
window.addEventListener('load', () => {
 
  if(staleNotes.length > 0) {
    renderPage()
    
  }
})

function renderPage() {
  
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  img.src = 'images/delete.png';
  inputBox.textContent = staleNotes
  notesContainer.appendChild(inputBox).appendChild(img);
  
}
function updateStorage(){
  localStorage.setItem('notes', notesContainer.textContent)
}

let notes = document.querySelectorAll('.input-box')

createBtn.addEventListener('click', () => {
  renderNewPage()
  
  
})

function renderNewPage() {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  img.src = 'images/delete.png';
  notesContainer.appendChild(inputBox).appendChild(img);
}
notesContainer.addEventListener('click', function(e){
  if(e.target.tagName === 'IMG') {
    updateStorage();
    e.target.parentElement.remove();
    
  }
  else if(e.target.tagName === 'P'){
    notes = document.querySelectorAll('.input-box');

    notes.forEach(note => {
      note.onkeyUp = function() {
          updateStorage()
      }
    })
  }
})


