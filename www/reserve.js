// This is a JavaScript file

let ReserveStore = ncmb.DataStore("RSVclass");
RserveStore.set("message", "Hello, NCMB!")
  .save()
  .then(function(object){
      // 保存に成功した場合の処理

  })
  .catch(function(err){
      // 保存に失敗した場合の処理

  });
  




function showModal() {
  var modal = document.querySelector('ons-modal');
  modal.show();
  setTimeout(function() { modal.hide(); }, 2000);
}