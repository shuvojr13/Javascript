// Filter - Array // Just for learn
    var arr = [2, 3, 4, 5, 6];
    var fArr = arr.filter(function(value) {
            return value % 2 == 0; //return true or false
        })
        console.log(arr);
        console.log(fArr);
        //Manually
        function filterArr(arr, cb) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (cb(arr[i], i, arr))
                    newArr.push(arr[i]);
            }
            return newArr;
        }

    console.log(filterArr(arr, function(value) {
        return value > 4;
    }));
