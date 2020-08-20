window.onload = function(){
    const $input = document.getElementById('name')
    const $name_img = document.getElementById('name-img')
    function showYourName(e){
        const keycode = e.which
        let value = e.target.value
        if(keycode === 13){
            value = value.replace(/\s+/g,'')
            if(/^[a-zA-Z]+$/.test(value)){
                value = value.toUpperCase()
                let h = ''
                for(let i=0;i<value.length;i++ ){
                    h+= `<span class="${value.charAt(i)} other"></span>`
                }
                $name_img.innerHTML = h
            }else{
                console.log(value)
                alert('只能输入英文，并且只能用空格')
            }
        }
    }
    $input.addEventListener('keydown',showYourName)
}