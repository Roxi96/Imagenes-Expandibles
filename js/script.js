const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        quitarClasesActivas()
        panel.classList.add('active')
        
        

    })
})
function  quitarClasesActivas (){
    panels.forEach( panel => {
        panel.classList.remove('active')

    })
}