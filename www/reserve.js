// This is a JavaScript file

const personalkey = "a2431bbe50198a38f73294bd3f243bbb9e3470af5d72247a414457a4b826f702"
const clientkey = "948e7e40ae83574e3475a86a0dc7076f2bacafd7effe67ae638be781ef4e9359"
const ncmb = new NCMB(personalkey,clientkey);
let data = ncmb.DataStore("Dataclass");
let saves = new data()

/*let ReserveStore = ncmb.DataStore("RSVclass");
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
}*/