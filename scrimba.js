"use strict";
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');
// this is an array of objects
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
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
    userName: { firstName: 'Bobby', lastName: 'Brown' },
    isReturning: true
};
const populateUser = (isReturning, firstName, lastName) => {
    if (isReturning) {
        returningUserDisplay.innerHTML = ' back ';
    }
    userNameDisplay.innerHTML = `${firstName} ${lastName}!`;
};
populateUser(you.isReturning, you.userName.firstName, you.userName.lastName);
