{
  let view = {
    el: '.newSong',
    template: `
    新建歌曲
    `,
    render(data){
      $(this.el).html(this.template)
    }
  }
  let controller = {
    init(view){
      this.view = view
      this.view.render(this.model.data)
      this.active()
      window.eventHub.on('new', (data) => {
        this.active()
      })
      window.eventHub.on('select', (data) => {
        this.deactive()
      })
      $(this.view.el).on('click', () => {
        window.eventHub.emit('new')
      })
    },
    active(){
      $(this.view.el).addClass('active')
    },
    deactive(){
      &(this.view.el).removeClass('active')
    }
  }
  controller.init(view)
}