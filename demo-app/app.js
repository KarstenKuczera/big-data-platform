"use strict";
angular.module('big-data', [ ])
  .controller('MainCtrl', MainCtrl)
  .factory('someService', someService);
  
function someService($http){
	return {
		log: function(msg){
		  console.log(msg);
		}
	}
};

  
function MainCtrl($scope, someService){
  console.clear();
  $scope.tweets = []
  $scope.popular = []
  
  $scope.likeRandomTweets = function(){
		const maxRepetitions = Math.floor(Math.random() * 200)
		for(var i = 0; i < maxRepetitions; ++i) {
			const tweetId = Math.floor(Math.random() * 29)
			someService.log(tweetId)
			$scope.likeTweet(tweetId)
		}
  }
  
  $scope.getTweets = function(){
	  $scope.tweets = JSON.parse(sessionStorage.getItem('big-data-demo')).tweets
	  $scope.popular = JSON.parse(sessionStorage.getItem('big-data-demo')).popular
  }
  
  $scope.likeTweet = function(index){
	  
	  let popular_tweet = $scope.popular.find(elm => elm.tweet == "tweet-"+index)
	  if (popular_tweet){
		  popular_tweet.count++
	  }else{
		  let tmp_popular = {
			  'tweet': 'tweet-'+index,
			  'count': 1
		  }
		  $scope.popular.push(tmp_popular)
	  }
  }
  
  $scope.init = function(){
	  let session_data = sessionStorage.getItem('big-data-demo')
	  if (session_data == null){
		  let tmp_obj = {
			  'tweets':[
			  {
				  'tweet': 'tweet-0',
				  'description': "I'm afraid for the calendar. Its days are numbered." ,
				  'heading': 'Time'
			  },
			  {
				  'tweet': 'tweet-1',
				  'description': "My wife said I should do lunges to stay in shape. That would be a big step forward.",
				  'heading': 'Move'
			  },
			  {
				  'tweet': 'tweet-2',
				  'description': "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!",
				  'heading': 'Soggy'
			  },
			  {
				  'tweet': 'tweet-3',
				  'description': "What do a tick and the Eiffel Tower have in common? They're both Paris sites.",
				  'heading': 'Steel'
			  },
			  {
				  'tweet': 'tweet-4',
				  'description': "What do you call a fish wearing a bowtie? Sofishticated.",
				  'heading': 'Carwash'
			  },
			  {
				  'tweet': 'tweet-5',
				  'description': "How do you follow Will Smith in the snow? You follow the fresh prints.",
				  'heading': 'The Slap'
			  },
			  {
				  'tweet': 'tweet-6',
				  'description': "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",
				  'heading': 'Nom Nom'
			  },
			  {
				  'tweet': 'tweet-7',
				  'description': "What did the janitor say when he jumped out of the closet? Supplies!",
				  'heading': 'Bucket'
			  },
			  {
				  'tweet': 'tweet-8',
				  'description': "Have you heard about the chocolate record player? It sounds pretty sweet.",
				  'heading': 'Sweet'
			  },
			  {
				  'tweet': 'tweet-9',
				  'description': "What did the ocean say to the beach? Nothing, it just waved.",
				  'heading': 'Sand'
			  },
			  {
				  'tweet': 'tweet-10',
				  'description': "Why do seagulls fly over the ocean? Because if they flew over the bay, we'd call them bagels.",
				  'heading': 'Bird'
			  },
			  {
				  'tweet': 'tweet-11',
				  'description': "I only know 25 letters of the alphabet. I don't know y.",
				  'heading': 'Math'
			  },
			  {
				  'tweet': 'tweet-12',
				  'description': "What did one wall say to the other? I'll meet you at the corner.",
				  'heading': 'Wonderwall'
			  },
			  {
				  'tweet': 'tweet-13',
				  'description': "A skeleton walks into a bar and says, Hey, bartender. I'll have one beer and a mop.",
				  'heading': 'Boop Boop'
			  },
			  {
				  'tweet': 'tweet-14',
				  'description': "I asked my dog what's two minus two. He said nothing.",
				  'heading': 'Woof'
			  },
			  {
				  'tweet': 'tweet-15',
				  'description': "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
				  'heading': 'Cheese'
			  },
			  {
				  'tweet': 'tweet-16',
				  'description': "What does a sprinter eat before a race? Nothing, they fast!" ,
				  'heading': 'Road Runner'
			  },
			  {
				  'tweet': 'tweet-17',
				  'description': "What has more letters than the alphabet? The post office!",
				  'heading': 'Delivery'
			  },
			  {
				  'tweet': 'tweet-18',
				  'description': "Dad, did you get a haircut? No, I got them all cut!" ,
				  'heading': 'Papa Roach'
			  },
			  {
				  'tweet': 'tweet-19',
				  'description': "Where do boats go when they're sick? To the boat doc.",
				  'heading': 'P. Sherman 42 Wallaby Way'
			  },
			  {
				  'tweet': 'tweet-20',
				  'description': "I don't trust those trees. They seem kind of shady.",
				  'heading': 'Baum'
			  },
			  {
				  'tweet': 'tweet-21',
				  'description': "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!" ,
				  'heading': 'Link'
			  },
			  {
				  'tweet': 'tweet-22',
				  'description': "I don't trust stairs. They're always up to something.",
				  'heading': 'Multi Layered'
			  },
			  {
				  'tweet': 'tweet-23',
				  'description': "Did you hear the rumor about butter? Well, I'm not going to spread it!",
				  'heading': 'Fatty'
			  },
			  {
				  'tweet': 'tweet-24',
				  'description': "Why couldn't the bicycle stand up by itself? It was two tired.",
				  'heading': 'Racing'
			  },
			  {
				  'tweet': 'tweet-25',
				  'description': "Why did Billy get fired from the banana factory? He kept throwing away the bent ones.",
				  'heading': 'DK'
			  },
			  {
				  'tweet': 'tweet-26',
				  'description': "Dad, can you put my shoes on? No, I don't think they'll fit me.",
				  'heading': 'Bigfoot'
			  },
			  {
				  'tweet': 'tweet-27',
				  'description': "Why can't a nose be 12 inches long? Because then it would be a foot.",
				  'heading': 'Smelly-Smell'
			  },
			  {
				  'tweet': 'tweet-28',
				  'description': "What kind of car does an egg drive? A yolkswagen.",
				  'heading': 'EGGG!'
			  },
			  {
				  'tweet': 'tweet-29',
				  'description': "Why didn't the skeleton climb the mountain? It didn't have the guts.",
				  'heading': 'Spooky'
			  }
			  ],
			  'popular': []
		  }
		  sessionStorage.setItem('big-data-demo', JSON.stringify(tmp_obj));
	  }
	  $scope.getTweets() 
  }
  $scope.init()
};
