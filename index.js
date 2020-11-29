//caching
const form=document.querySelector('form')
const diary=document.querySelector('.diary')

// form.addEventListener('submit',e=>{
//   e.preventDefault()
//
//   //create a button for each entry
//   const btn=document.createElement('button')
//   const date = new Date()
//   const dateString=`${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.toLocaleTimeString()}`
//   btn.textContent=dateString
//   btn.classList.add('btn')
//   btn.classList.add('btn-entry')
//   btn.addEventListener('click',()=>{
//     div.classList.toggle('hide')
//   })
//   diary.appendChild(btn)
//
//   //create a div for each entry and hide it
//   const div=document.createElement('div')
//   div.textContent=form.textentry.value
//   div.classList.add('hide')
//   div.classList.add('btn')
//   div.classList.add('text-entry')
//   diary.appendChild(div)
//
//   form.textentry.value=''
// })

function displayBtns(){
  for(let i=0; i<localStorage.length; i++){
    //create a button for each entry
    const btn=document.createElement('button')
    const key=localStorage.key(i);
    btn.textContent=key
    btn.classList.add('btn')
    btn.classList.add('btn-entry')
    btn.addEventListener('click',()=>{
      div.classList.toggle('hide')
    })
    diary.appendChild(btn)

    //create a div for each entry and hide it
    const div=document.createElement('div')
    div.textContent=localStorage.getItem(key)
    div.classList.add('hide')
    div.classList.add('btn')
    div.classList.add('text-entry')
    diary.appendChild(div)
  }
}
displayBtns()
form.addEventListener('submit',e=>{
  e.preventDefault()

  const date = new Date()
  const dateString=`${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.toLocaleTimeString()}`
  const text=form.textentry.value
  localStorage.setItem(dateString, text)

  location.reload()
  // displayBtns()
  form.textentry.value=''
})
