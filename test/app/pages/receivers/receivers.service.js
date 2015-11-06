/**
 * dashboard.reveivers Modul
 * 
 *
 * Description
 */
var app = angular.module('dashboard.receivers')

.factory('dataService', function ($http) {

    var obj = {};

    obj.addNewData = function(data){

        return $http.post('http://0.0.0.0:3000/api/receivers', data);
    };

    obj.getDataAll = function () {

        return $http.get('http://0.0.0.0:3000/api/receivers');
    };

    obj.getDataById = function (id) {

        return $http.get('http://0.0.0.0:3000/api/receivers/' + id);
    };

    obj.deleteDataById = function (id) {

        $http.delete('http://0.0.0.0:3000/api/receivers/' + id, data);
    };

    obj.updateData = function (id, data) {
        console.log(obj);
       return $http.put('http://0.0.0.0:3000/api/receivers/' + id, data);
    };

    obj.test = function(id){

        console.log(id);
    };

    /**
     *
     * @param  {[array]} tmpl [config object in array]
     * @param  {[array]} income [data object in array]
     * @return {[array]} data    [returns mixed array]
     */
    obj.mixData = function (tmpl, income) {

        var data = [];
        var table = tmpl;
        var keys = Object.keys(income[0]);
        var keysLn = keys.length;
        var incomeLn = income.length;
        var tableLn = table.length;

        for (var k = 0; k < incomeLn; k += 1) {

            var obj = {};
            for (var i = 0; i < tableLn; i += 1) {
                for (var j = 0; j < keysLn; j += 1) {

                    var key = table[i].name;
                    if (table[i].name === keys[j]) {
                        obj[key] = income[k][keys[j]];

                    }

                } // end for keysLn
                if (table[i].type === 'buttons') {
                    obj[key] = {
                        name: table[i].name,
                        title: table[i].title,
                        type: table[i].type
                    };
                };

            } // end for tableLn

            data.push(obj);
        } // end for incomeLn

        return data;
    }; // End Mix Function


    return obj;
})

module.exports = app;
