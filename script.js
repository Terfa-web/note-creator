const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem('notes')
}
showNotes();
function updateStorage(){
  localStorage.setItem('notes', notesContainer.innerHTML)
}

let notes = document.querySelectorAll('.input-box')

createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  img.src = 'images/delete.png';
  notesContainer.appendChild(inputBox).appendChild(img);
  inputBox.style.display = 'block';
  inputBox.focus()
})

notesContainer.addEventListener('click', (e)=> {
  if(e.target.tagName === 'IMG') {
    
    e.target.parentElement.remove();
    updateStorage()
  }
  if(e.target.tagName === 'P'){
    notes = document.querySelectorAll('.input-box')

    notes.forEach(note => {
      note.onKeyUp = function() {
          updateStorage()
      }
    })
  }
})
