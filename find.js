//Find - Array element or Index JS

var arr = [2, 3, 45, 5, 6, 9];
        var result = arr.find(function(value) {
            return value == 9;
        })
        console.log(result);
        var result = arr.findIndex(function(value) {
            return value == 9;
        })
        console.log(result);

        function Find(arr, cb) {
            for (var i = 0; i < arr.length; i++) {
                if (cb(arr[i]))
                    return arr[i];
            }
        }
        console.log(Find(arr, function(value) {
            return value == 9
        }));