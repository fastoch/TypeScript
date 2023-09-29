const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

// this is an array of objects
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

// Solution
const showReviewTotal = (x: number, name: string, loyalty: boolean) => {
  reviewTotalDisplay.innerHTML = 'Review total = ' + x.toString() + ' | last reviewed by ' + name
  if (loyalty) {
    reviewTotalDisplay.innerHTML += ' ⭐'
  }
}

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

const populateUser = (isReturning: boolean, firstName: string, lastName: string) => {
  if (isReturning) {
    returningUserDisplay.innerHTML = ' back '
  }
  userNameDisplay.innerHTML = `${firstName} ${lastName}!`
}

populateUser(you.isReturning, you.firstName, you.lastName)

