 
var kanaArr = {};
kanaArr['ア'] = 'アイウエオあいうえお';
kanaArr['カ'] = 'カキクケコガギグゲゴかきくけこがぎぐげご';
kanaArr['サ'] = 'サシスセソザジズゼゾさしすせそざじずぜぞ';
kanaArr['タ'] = 'タチツテトダヂヅデドたちつてとだぢづでど';
kanaArr['ナ'] = 'ナニヌネノなにぬねの';
kanaArr['ハ'] = 'ハヒフヘホパピプペポバビブベボはひふへほぱぴぷぺぽばびぶべぼ';
kanaArr['マ'] = 'マミムメモまみむめも';
kanaArr['ヤ'] = 'ヤユヨやゆよ';
kanaArr['ラ'] = 'ラリルレロらりるれろ';
kanaArr['ワ'] = 'ワヲンわをん';

var wordlist = {};

$.each(kanaArr, function(index, value) {
  var temp = new Array();
  for (var i = 0; i < value.length; i++) {
    
    if (index != "ヤ" && index != "ワ") {
      if(i >= 5)
        temp[i % 5] = temp[i % 5] + value.charAt(i);
      else
        temp.push(value.charAt(i));
    } else {
      if(i>=3)
       temp[i % 3] = temp[i % 3] + value.charAt(i);
      else
        temp.push(value.charAt(i));
    }
    
  }
  for (var j = 0; j < temp.length; j++) {
    wordlist[temp[j].charAt(0)] = temp[j];
  }
  //$("#show").append(JSON.stringify(temp));
});

$("#show").append(JSON.stringify(wordlist));