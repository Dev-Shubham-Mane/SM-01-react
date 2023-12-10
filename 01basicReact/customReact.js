function customRender(reactElement, maincontainer) {
//    const domEle = document.createElement(reactElement.type) 
//    domEle.innerHTML = reactElement.childern
//    domEle.setAttribute('href', reactElement.props.href)
//    domEle.setAttribute('target', reactElement.props.target) 
   
//    maincontainer.appendChild(domEle)

const domEle = document.createElement(reactElement.type)
domEle.innerHTML = reactElement.childern

for (const props in obj) {
        if(props == 'childern') continue 
            domEle.setAttribute(props , reactElement.obj[props])
        
}
    maincontainer.appendChild(domEle)

}

const reactElement = {
    type: 'a',
    props: {
        href: '',
        target: '_blank'
    },
    childern: 'click me'
}

const maincontainer = document.getElementById('root')

customRender(reactElement, maincontainer)