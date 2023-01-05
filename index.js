
window.onload = function(){

    let segundos = 00;
    let miliSegundos = 00;
    let interval;
    let segundos1 = document.getElementById('miliSegundos')
    let segundos2 = document.getElementById('segundos')
    let btnComeço = document.getElementById('começo');
    let btnParar = document.getElementById('para')
    let btnReset = document.getElementById('reset')

    btnComeço.onclick = function(){
        clearInterval(interval)
        interval = setInterval(starTimer,10)
    }

    btnParar.onclick = function(){
        clearInterval(interval)
    }

    btnReset.onclick = function(){
        clearInterval(interval)
        segundos = '00'
        miliSegundos = '00'
        segundos2.innerHTML = segundos
        segundos1.innerHTML = miliSegundos
    }
    
    function starTimer(){
        miliSegundos++
        if(miliSegundos <= 9){
            segundos1.innerHTML = '0'+ miliSegundos
        }
        if(miliSegundos > 9){
           segundos1.innerHTML = miliSegundos
        }
        if(miliSegundos >99){
            segundos++
            segundos2.innerHTML = '0'+segundos
            miliSegundos = 0
            segundos1.innerHTML = '0'+0  
        }
        if(segundos >9){
            segundos2.innerHTML = segundos
        }
    }
}