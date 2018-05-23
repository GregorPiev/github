apptest.service('DataService', function ($http, $location) {
    this.read = function (callback) {
        var absUrl = $location.absUrl();
        console.log(absUrl);
        $http({
            method: 'POST',
            url: absUrl + 'app/data/data.json',
            headers: { 'Content-type': 'application/json' }
        }).then(function success(response) {           
            callback(response);
        }, function error() {
            console.debug('Error');
        });
    }
    
});