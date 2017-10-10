'use strict';

eventsApp.controller('EventController',
   function EventController($scope) {
      $scope.event = {
         name: 'Angular Boot Camp',
         date: '10/09/17',
         time: '10:30am',
         location: {
            address: 'Ruby Receptionists',
            city: 'Portland',
            state: 'OR'
         },
         imageUrl: 'img/angularjs-logo.png',
         sessions: [
            {
               name: 'Directives Masterclass',
               creatorName: 'Bob Smith',
               duration: '1 hr',
               level: 'Advanced',
               abstract: 'In this session you will learn the ins and outs of directives!',
               upVoteCount: 0
            },
            {
               name: 'Scopes for Fun and Profit',
               creatorName: 'Jonn Dern',
               duration: '30 mins',
               level: 'Introductory',
               abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
               upVoteCount: 0
            },
            {
               name: 'Well Behaved Controllers',
               creatorName: 'Jane Francis',
               duration: '2 hrs',
               level: 'Intermediate',
               abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbors.',
               upVoteCount: 0
            }
         ]
      };

      $scope.upVoteSession = function(session) {
         session.upVoteCount++;
      };

      $scope.downVoteSession = function(session) {
         session.upVoteCount--;
      };

   }
);
