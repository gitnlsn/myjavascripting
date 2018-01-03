function foo(){
  var bar;
  quux = 0;
  function zip(){
    bar = true;
    var quux;
  }
  return zip;
}
//var func = foo();
//console.log(func, func());
