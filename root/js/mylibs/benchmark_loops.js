var loopLength = 100000;

// ループ実行のために配列をセット
var array = [];

for (var i = 0; i < loopLength; i++) {
	array[i] = "item" + i;
}

benchmark("Loop performance", {
    "for-loop": function () {
	    for (var i = 0, item; i < array.length; i++) {
		    item = array[i];
	    }
    },

    "for-loop, cached length": function () {
	    for (var i = 0, l = array.length, item; i < l; i++) {
		    item = array[i];
	    }
    }
}, 1000);


