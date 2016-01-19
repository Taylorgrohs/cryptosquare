describe("encrypt", function() {
  it("", function () {
    expect(leapYear(1993)).to.equal(false);

});


var test = "don't compare yourself to others, compare yourself to the person you were yesterday".replace(/['|&;$%@"<>()+,]/g, '').replace(/ /g, '');
//test
test = test.split("");
var set = [];
var set2 = [];
var row = 8;
var column = 9;
var count = 0;

var row2 = 5;
var col = 14;

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
    set2[i].push(set[0][0]);
    set2[i].push(set[1][0]);
    set2[i].push(set[2][0]);
    set2[i].push(set[3][0]);
    set2[i].push(set[4][0]);
    set[0].splice(0,1);
    set[1].splice(0,1);
    set[2].splice(0,1);
    set[3].splice(0,1);
}
}
    //set2[i].push(set[j+9]);

    //set2[i][j] = set[j][i];
  }
}
