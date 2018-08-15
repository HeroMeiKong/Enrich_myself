window.eventHub = {
  events: {

  },
  emit(eventName,data){
    for(let key in this.events){
      if(key === eventName){
        let fnList = this.events[key]
        fnList.map((fn)=>{
          fn.call(undefined,data)
        })
      }
    }
  },
  on(eventName,fn){
    if(this.events[eventName] === undefined){
      this.enents[eventName] = []
    }
    this.events[eventName].push(fn)
  }
}