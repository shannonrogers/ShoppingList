const input = document.querySelector('#item-input')
const addBtn = document.querySelector('#add-btn')
const removeBtn = document.querySelector('#clear-completed')
const list = document.querySelector('#shopping-list')
const empty = document.querySelector('#empty')
const total = document.querySelector('#total-count')
const completeCount = document.querySelector('#completed-count')
const remaining = document.querySelector('#remaining-count')


addBtn.addEventListener('click', (e) =>{
    if (input.value.trim() !== ""){
    // adding the list element with input value
    const li = document.createElement("li") 
    li.innerText = input.value
    li.classList.add('incomplete')
    li.id = input.value.trim()
    
    // adding complete button
    const completeBtn = document.createElement("button")
    completeBtn.innerText = "Complete"
    // adding event listener to the new button
    completeBtn.addEventListener('click', (e) =>{
    li.classList.toggle('complete')
    updateCounts()
    })
    // adding li and complete elements to the list
    li.appendChild(completeBtn)
    list.appendChild(li)
    empty.innerText = ''
    input.value = ''
    updateCounts()
}
    else {
    empty.innerText = "Please enter Item"
    empty.style.color = 'red'
    
    }

})

removeBtn.addEventListener('click', (e) =>{
    const completeItems = document.querySelectorAll('.complete')
    // completeItems returns a Nodelist, for each goes through and removes each item that is marked compelte, inplace change
    completeItems.forEach(item => item.remove());
    updateCounts()

})

// getting counts, functions are hoisted so doesn't matter if this is last
function updateCounts() {
    total.innerText = list.querySelectorAll('li').length;
    completeCount.innerText = list.querySelectorAll('.complete').length;
    remaining.innerText = list.querySelectorAll('.incomplete').length;
}



