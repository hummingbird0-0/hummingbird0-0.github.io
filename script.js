const hello = 'Hello World!';
console.log(hello);

var animals = ["cat", "panda", "leopard"];
console.log(animals);
for(var i = 0; i < animals.length; i++){
  console.log(animals[i]);
};


var onetohundred=function(){
  var x = 1;
  var y = 0;

  for(j=0;j<100;j++){
  y=y+x;
  x=x+1;
  };

  console.log(y);
};

onetohundred();

