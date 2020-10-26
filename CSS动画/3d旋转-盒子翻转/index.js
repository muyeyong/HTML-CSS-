window.onload = ()=>{
    let inputDom = getDom('.mask form input')
    let homeDom = getDom('.home')
    inputDom.onkeydown = function(e){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==13){
           let maskDom = getDom('.mask')
           maskDom&&maskDom.setAttribute('style','display:none')
           homeDom&&homeDom.setAttribute('style','display:block')
           const name = e.target.value
           let imgPath = './imgs/'
           let comment = '真帅'
           let frontDom = getDom('.front')
           let backDom = getDom('.back')
           let img = document.createElement('img')
           let h = document.createElement('h5')
           if(nameList.includes(name)){
            img.src = imgPath+pinyin[name]+'.png'
            h.innerText = commentList[name]
           }else{
            img.src = imgPath+pinyin['徐勇']+'.png'
            h.innerText = commentList['徐勇']
           }
           frontDom.appendChild(img)
           backDom.appendChild(h)
        }
    }
    function getDom(flag){
        return document.querySelector(flag)
    }
    function refresh(){
        return false
    }
   
}

const nameList = ['段建辉','肖广','毛愿','高伟','周任远','刘格凡','蔡佩良','徐勇']
const pinyin = {
    '段建辉':'djh',
    '肖广':'xg',
    '毛愿':'my',
    '高伟':'gw',
    '周任远':'zry',
    '刘格凡':'lgf',
    '蔡佩良':'cpl',
    '徐勇':'xy'
}
const commentList = {
    '段建辉':'渣渣辉',
    '肖广':'垃圾广',
    '毛愿':'好漂亮',
    '高伟':'我儿子',
    '周任远':'哼哼哼',
    '刘格凡':'真香',
    '蔡佩良':'好亮',
    '徐勇':'大帅哥'
}
