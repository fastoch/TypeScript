// Variables and functions
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement

const showReviewTotal = (value: number, reviewer: string, isLoyalty: boolean) => {
    const iconDisplay = isLoyalty ? ' ⭐' : ''
    reviewTotalDisplay.innerHTML = 'Review Total = ' + value.toString() + ' | Last reviewed by ' + reviewer + ' ' + iconDisplay
}

const populateUser = (isReturning : boolean, firstName: string, lastName: string) => {
    if (isReturning == true){
        returningUserDisplay.innerHTML = ' back'
    }
    userNameDisplay.innerHTML = `${firstName} ${lastName}!`
}


// This is an array of objects
const reviews: {
  name: string, 
  stars: number, 
  loyaltyUser: boolean, 
  date: string
}[] = [
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
]

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you: {
  firstName: string,
  lastName: string,
  age: number,
  isReturning: boolean,
  stayedAt: (string | number)[]
} = {
  firstName: 'Fabrice',
  lastName: 'Pustoc\'h',
  age: 41,
  isReturning: true,
  stayedAt: ['Florida-home', 'Oman-flat', 'Tokyo-bungalow', 23]
}

populateUser(you.isReturning, you.firstName, you.lastName)

