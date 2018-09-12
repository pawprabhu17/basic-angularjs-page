var app = angular.module('proteas',[]);

app.config(function(){
//before the application runs

	/* To be used */

});

app.run(function(){
// during the running time of application

	/* To be used */


});

app.controller('appController',['$scope',function($scope){

	//ng-click for remove
	$scope.removeProtea = function(x){
		var removedProtea= $scope.protea.indexOf(x); 
		//index of the element to be removed
		$scope.protea.splice(removedProtea,1); 
		//removes the element of that index and 1 is the number of element to be removed
	};

	//ng-submit for adding new elements
	$scope.addProtea = function(){
		//push the new elements to the exising array of objects
		$scope.protea.push({
			name: $scope.newprotea.name,
			des : $scope.newprotea.des,
			star_power:parseInt($scope.newprotea.star_power),
			available : true
		});
		$scope.newprotea.name = "";
		$scope.newprotea.des = "";
		$scope.newprotea.star_power = "";
	};

	$scope.protea =[
					{
						name:'AB DE VILLIERS',
						des:'Batsman',
						star_power: 100,
						available:true,
						thumb: 'Images/abd.jpg'
					},
					{
						name:'FAF DU PLESIS',
						des:'Batsman',
						star_power: 90,
						available:true,
						thumb: 'Images/fdp.jpg'
					},
					{
						name:'QUINTON DE KOCK',
						des:'All-rounder',
						star_power: 80,
						available:true,
						thumb: 'Images/qdk.jpg'
					},
					{	
						name:'HASIM AMLA',
						des:'Batsman',
						star_power: 70,
						available:false
					},
					{
						name:'KAGISO RABADA',
						des:'Bowler',
						star_power: 80,
						available:true,
						thumb: 'Images/kg.jpg'
					}
				   ];

}]);
