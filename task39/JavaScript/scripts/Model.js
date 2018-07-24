window.Model = function(options){
  let resourceName = options.resourceName;
  return {
    init: function (){
      var APP_ID = 'RXUUPp68EacDal2omal4h3lP-gzGzoHsz';
      var APP_KEY = '7JIhb6w2sDIausaNyaf4NqsH';
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    fetch: function(){ 
      var query = new AV.Query(resourceName);
      return query.find() // Promise 对象
    },
    // 创建数据
    save: function(object){
      var X = AV.Object.extend(resourceName);
      var x = new X();
      return x.save(object);
    }
  };
}