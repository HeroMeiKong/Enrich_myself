mybutton.addEventListener('click',(e)=>{
  let request = new XMLHttpRequest();
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      console.log('请求响应已完毕')
      if(request.status >= 200 && request.status < 300){
        console.log('请求成功')
        let str = request.responseText
        console.log(str)
        let obj = window.JSON.parse(str)
        console.log(typeof obj)
        console.log(obj)
        console.log('obj.note')
        console.log(obj.note)
        console.log('obj.note,from')
        console.log(obj.note.from)
      }
      else if(request.status >= 400){
        console.log('请求失败')
      }
    }
  }
  request.open('GET','/xxx')
  request.send()
})