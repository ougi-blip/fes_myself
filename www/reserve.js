// This is a JavaScript file

var personalkey = "a2431bbe50198a38f73294bd3f243bbb9e3470af5d72247a414457a4b826f702"
var clientkey = "948e7e40ae83574e3475a86a0dc7076f2bacafd7effe67ae638be781ef4e9359"
var ncmb = new NCMB(personalkey,clientkey);
let data = ncmb.DataStore("Data");
let saves = new data()//インスタンスの作成
function Savor(saves){
  saves.set("congestion",91)
  .save()
  .then(function(object)
    {console.log("mission clear!")})
  .cartch(function(er){
    console.log("error!")
  })
}




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