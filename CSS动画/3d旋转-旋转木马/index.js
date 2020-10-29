window.onload = ()=>{
    let inputDom = getDom('.mask form input')
    let homeDom = getDom('.out_animation')
    inputDom.onkeydown = function(e){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==13){
           let maskDom = getDom('.mask')
           maskDom&&maskDom.setAttribute('style','display:none')
           homeDom&&homeDom.setAttribute('style','display:block')
           const name = e.target.value
           let imgContains = getDoms('.out_animation section div')
           if(nameList.includes(name)){
                imgContains.forEach(item=> item.setAttribute('style',`background: url(./imgs/${pinyin[name]}.png) no-repeat; background-size:100%`))
           }
        }
    }
    function getDom(flag){
        return document.querySelector(flag)
    }
    function getDoms(flag){
        return document.querySelectorAll(flag)
    }
    function refresh(){
        return false
    }
   
}

const nameList = ['段建辉','肖广','毛愿','高伟','周任远','刘格凡','蔡佩良','徐勇','张晓玲','方伟博','丁作祥']
const pinyin = {
    '段建辉':'djh',
    '肖广':'xg',
    '毛愿':'my',
    '高伟':'gw',
    '周任远':'zry',
    '刘格凡':'lgf',
    '蔡佩良':'cpl',
    '徐勇':'xy',
    '张晓玲':'zxl',
    '方伟博':'fwb',
    '丁作祥':'dzx'
}
const commentList = {
    '段建辉':'渣渣辉',
    '肖广':'垃圾广',
    '毛愿':'好漂亮',
    '高伟':'我儿子',
    '周任远':'哼哼哼',
    '刘格凡':'真香',
    '蔡佩良':'好亮',
    '徐勇':'大帅哥',
    '方伟博':'有点秃然',
    '张晓玲':'就这样看着你'
}
