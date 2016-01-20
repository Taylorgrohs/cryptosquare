describe("encrypt", function() {
  it("", function () {
    expect(leapYear(1993)).to.equal(false);

});


var test = "don't compare yourself to others, compare yourself to the person you were yesterday".replace(/['|&;$%@"<>()+,]/g, '').replace(/ /g, '');
//test
test = test.split("");
var set = [];
var set2 = [];
var empty;
var row = 8;
var column = 9;
var count = 0;

var row2 = 8;
var col = 10;

for ( var i = 0; i < row; i++) {
  set[i] = new Array();
  for (var j = 0; j < column; j++) {
    set[i].push(test[0]);
    test.splice(0, 1);
  }
}



for ( var i = 0; i < col; i++) {
  set2[i] = new Array();
  for (var j = 0; j < row2; j++) {
    set2[i][j] = set[j][i];
    
}
}
set2.toString();
//set2[i].push(set[j][0]);
//set[j].splice(0,1);
    //set2[i].push(set[j+9]);
