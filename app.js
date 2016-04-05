angular.module('app', []);

angular.module('app').controller('products', function($scope){
  $scope.users = [
    {
      name: 'John Doe',
      gender: 'M',
      phone: '801-555-5555',
      isNew: true
    },
    {
      name: 'Buzz Lightyear',
      gender: 'witheld',
      phone: '801-666-6666'
    },
    {
      name: 'Sally Struthers',
      gender: 'F',
      phone: '801-999-9999'
    }
  ];

});
