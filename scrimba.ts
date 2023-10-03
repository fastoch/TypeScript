// Variables and functions
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const propertyContainer = document.querySelector('.properties') as HTMLElement
const footer = document.querySelector('.footer') as HTMLElement

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

// Enum Type
const ADMIN = 'admin'
const READ_ONLY = 'read-only'

enum Privileges {
  ADMIN,
  READ_ONLY
}

const you: {
  firstName: string,
  lastName: string,
  privileges: Privileges.ADMIN, // custom type 
  age: number,
  isReturning: boolean,
  stayedAt: (string | number)[]
} = {
  firstName: 'Fabrice',
  lastName: 'Pustoc\'h',
  privileges: Privileges.ADMIN, // this property's value cannot be anything else
  age: 41,
  isReturning: true,
  stayedAt: ['Florida-home', 'Oman-flat', 'Tokyo-bungalow', 23]
}

populateUser(you.isReturning, you.firstName, you.lastName)

// Properties (another array of objects)
const properties: {
  image: string,
  title: string,
  price: number,
  location: {
    firstLine: string,
    city: string,
    zipCode: number,
    country: string,
  },
  contact: [number, string],
  isAvailable: boolean
}[] = [
  {
    image: 'images/colombia-property.jpg',
    title: 'Colombian Shack',
    price: 45,
    location: {
      firstLine: 'shack 37',
      city: 'Bogota',
      zipCode: 45632,
      country: 'Colombia',
    },
    contact: [+999555666, 'marywinkle@gmail.com'],
    isAvailable: true
  },
  {
    image: 'images/poland-property.jpg',
    title: 'Polish Cottage',
    price: 34,
    location: {
      firstLine: 'n°23',
      city: 'Gdansk',
      zipCode: 343903,
      country: 'Poland',
    },
    contact: [+111222333, 'garydavis@hotmail.com'],
    isAvailable: false
  },
  {
    image: 'images/london-property.jpg',
    title: 'London Countryside',
    price: 23,
    location: {
      firstLine: 'flat 15',
      city: 'London',
      zipCode: 35433,
      country: 'England',
    },
    contact: [+444777888, 'andyluger@aol.com'],
    isAvailable: true
  },
]

// Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = properties[i].title
  const image = document.createElement('img')
  image.setAttribute('src', properties[i].image)
  image.classList.add('img')
  card.appendChild(image)
  propertyContainer.appendChild(card)
}

let currentLocation: [string, string, number] = ['France', '19:53', 25]
footer.innerHTML = currentLocation[0] + ' | ' + currentLocation[1] + ' | ' + currentLocation[2] + '°C'



