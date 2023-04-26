var arr = [2, 3, 45, 5, 6, 9,10];
        arr.sort(function(a, b) {
            if (a > b) return 1;
            else if (a < b) return -1;
            else return 0;
        });
        console.log(arr);
        var person = [

            {
                name: 'A',
                age: 21
            },

            {
                name: 'B',
                age: 25
            },

            {
                name: 'C',
                age: 23
            },

            {
                name: 'D',
                age: 24
            }
        ]

        person.sort(function(a,b)
        {
            if(a.name > b.name) return 1;
        })
        console.log(person);
        person.sort(function(a, b) {
            if (a.age > b.age) return 1;
            else if (a.age < b.age) return -1;
            else return 0;
        });
        //console.log(person);
        var res1 = arr.every(function(value) {
            return value > 0;
        })
        console.log(res1);
        var res2 = arr.some(function(value) {
            return value == 45;
        })
        console.log(res2);
