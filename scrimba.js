"use strict";
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');
// this is an array of objects
const reviews = [
    {
        name: 'Sheena',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Charles',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Laura',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
// Solution
const showReviewTotal = (x, name, loyalty) => {
    reviewTotalDisplay.innerHTML = 'Review total = ' + x.toString() + ' | last reviewed by ' + name;
    if (loyalty) {
        reviewTotalDisplay.innerHTML += ' ⭐';
    }
};
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
const you = {
    firstName: 'Fabrice',
    lastName: 'Pustoc\'h',
    age: 41,
    isReturning: true,
    stayedAt: ['Florida-home', 'Oman-flat', 'Tokyo-bungalow', 23]
};
const populateUser = (isReturning, firstName, lastName) => {
    if (isReturning) {
        returningUserDisplay.innerHTML = ' back ';
    }
    userNameDisplay.innerHTML = `${firstName} ${lastName}!`;
};
populateUser(you.isReturning, you.firstName, you.lastName);
