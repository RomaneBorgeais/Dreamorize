function memCtrl($scope) {
    $scope.pageLevel = 0;
    //console.log("page level : " + $scope.pageLevel);

    $scope.increaseLevel = function() {
        $scope.pageLevel++;
        console.log($scope.pageLevel);
        //console.log("page level après click : " + $scope.pageLevel);
    };

    //$scope.date = 0;
    //$scope.type = 0;
    //$scope.titre = 0;

    $scope.addDate = function(date) {
        $scope.$parent.date = date;
        console.log($scope.$parent.date + " // " + $scope.$parent.type + " // " + $scope.$parent.titre);
    };

    $scope.addType = function(type) {
        $scope.$parent.type = type;
        console.log($scope.$parent.date + " // " + $scope.$parent.type + " // " + $scope.$parent.titre);
    };

    $scope.addTitre = function(titre) {
        $scope.$parent.titre = titre;
        console.log($scope.$parent.date + " // " + $scope.$parent.type + " // " + $scope.$parent.titre);
    };

    $scope.postReve = function() {

        console.log($scope.date + " // " + $scope.type + " // " + $scope.titre);
        if ($scope.date != null && $scope.type != null && $scope.titre != null) {

            var date_reve = $scope.$parent.date;
            var type_reve = $scope.$parent.type;
            var titre_reve = $scope.$parent.titre;

            jQuery.ajax({

                type: "GET",
                url: "http://dreamorize.meximas.com/back_office/app/insertFromMobile.php",
                data: {
                    date: date_reve,
                    type: type_reve,
                    titre: titre_reve
                },
                error: function(xhr, status, error) {
                    alert("erreur");
                },
                success: function(data, status, XHR) {
                    console.log("requête réussie");
                    console.log(data['responseText']);
                }
            });
        } else {
            alert("Variables de rêve méconnues.");
        }

        $scope.$parent.date = "";
        $scope.$parent.type = "";
        $scope.$parent.titre = "";

    }
}