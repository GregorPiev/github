apptest.controller('testcontroller', function ($scope, DataService) {
    $scope.chooseIndex = -1;
    $scope.productDetail = {'brendName':'','quantity': 0, 'price': 0, 'description': '' };
    $scope.showAdd = false;

    DataService.read(function (response) {        
        $scope.products = response.data.products;
    });

    $scope.choosed = function (index, item) {
        $scope.showAdd = false;
        $scope.chooseIndex = index;
        $scope.headerName = item.name.toUpperCase() + " DETAILS";

        $scope.productDetail.quantity = item.propities.Quantity;
        $scope.productDetail.price = item.propities.Price;
        $scope.productDetail.description = item.propities.Description;
    };
    $scope.testChecked = function (index) {
        return $scope.chooseIndex == index;
    };
    $scope.ShowDelete = function (index) {       
        return $scope.chooseIndex == index;
    };
    $scope.checkIfChoosed = function (index) {
        return $scope.chooseIndex == index;
    };
    $scope.showDetails = function () {
        return $scope.chooseIndex != -1;
    };

    $scope.addItem = function () {
        $scope.showAdd = true;
        $scope.chooseIndex = 100000000000000000000;
        $scope.productDetail = { 'brendName': '', 'quantity': 0, 'price': 0, 'description': '' };
        $scope.headerName = "NEW ITEM DETAILS";
    };

    $scope.save = function () {
        console.info("Save productDetail :" + JSON.stringify($scope.productDetail));
        console.log($scope.products);
        $scope.products.push({ "name": $scope.productDetail.brendName, "propities": { "Quantity": $scope.productDetail.quantity, "Price": $scope.productDetail.price, "Description": $scope.productDetail.description } });
       
        $scope.showAdd = false;
        $scope.productDetail = { 'brendName': '', 'quantity': 0, 'price': 0, 'description': '' };
        $scope.chooseIndex = -1;

        $scope.$apply();
    };

    $scope.delete = function (prodname) {
        $scope.products = $scope.products.filter(function (item) {
            return !(item.name == prodname);
        });
        $scope.$apply();
    }

})