export function debounce(f, ms) {
    let isCooldown = false;
    return function() {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
}

export function getId(){
    let location = window.location.href
    let final = (location.substr(location.lastIndexOf('/') + 2)).toString()
    return final
}

export function toggleClass(element,className){
    if(element !== undefined && element !== null){
        if(element.classList !== undefined && element.classList !== null){
        const classList = element.classList.toString()
        if(element.tagName === 'INPUT'){
            window.setTimeout(function ()
            {
                element.focus();
            }, 0);
        }
        if(classList.indexOf(className) === -1){
            element.classList.add(className)
        }
        else if(classList.indexOf(className) !== -1) {
            element.classList.remove(className)
        }
    }
    else return
    }
    else return
}