// Reduce method - Array JS       
        var arr = [2, 3, 45, 5, 6];
        //Reduce method
        var sum = arr.reduce(function(prev, curr) {
            return prev + curr;
        }, 0)
        console.log(sum);
        var max = arr.reduce(function(prev, curr) {
            return Math.max(prev, curr);
        }, 0)
        console.log(max);
        // Manually
        function Reduce(arr, cb, acc) {
            for (var i = 0; i < arr.length; i++) {
                acc = cb(acc, arr[i]);
            }
            return acc;
        }
        var sum2 = Reduce(arr, function(prev, curr) {
            return prev + curr;
        }, 0)
        var mx = Reduce(arr, function(prev, curr) {
            return Math.max(prev, curr);
        }, 0)
        var mn = Reduce(arr, function(prev, curr) {
            return Math.min(prev, curr);
        }, arr[0])
        console.log(sum2);
        console.log(mx);
        console.log(mn);