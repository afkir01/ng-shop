var app = angular.module('phoneShop', ['ngAnimate']);



	//declaring the controller //

app.
controller('phoneController', ['$scope', '$sce',
function phoneController($scope, $sce) {

	

	// array with phones 

	$scope.phones = [
    {
        name: "Iphone 6s",
        price: 600,
        image: "images/iphone7.jpg",
		selected: false,
	},
    {
        name: "Iphone 6s Plus",
        price: 650,
        image: "images/iphone7.jpg",
		selected: false,
	},
    {
        name: "Iphone 7",
        price: 750,
        image: "images/iphone7.jpg",
		selected: false,
	},
    {
        name: "Iphone 7 Plus",
        price: 850,
        image: "images/iphone7.jpg",
		selected: false,
	},
    {
        name: "Samsung S5",
        price: 250,
        image: "images/samsungS5.jpg",
		selected: false,
	},
    {
        name: "Samsung S6",
        price: 400,
        image: "images/samsungS6.jpg",
		selected: false,
	},
    {
        name: "Samsung S7",
        price: 600,
        image: "images/samsungS7.jpg",
		selected: false,
	},
    {
        name: "Samsung Galaxy Note 3",
        price: 250,
        image: "images/note3.jpg",
		selected: false
	}
	];


	// looping through the array and count the total phone price!
	
	$scope.getTotal = function(){
		var total = 0;
		
		$scope.phones.forEach(function(phone) {
			if (phone.selected === true) {
				total = total+phone.price;  
			}
		});

		return total;
	};
	    
}]);
