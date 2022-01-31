# Octopus Front End Test

## Getting started

### Back end

1. Clone this repo
2. In terminal, cd into octopus/server
3. Start a virtual environment

```
virtualenv env
source env/bin/activate
```

4. Run `pip install -r requirements.txt` to install dependencies
5. Migrate and seed the database

```
./manage.py migrate
./manage.py loaddata products
```

6. Run `./manage.py runserver 8000` to start the back end server

### Front end

1. `cd octopus/client`
2. `yarn` to install dependencies
3. `yarn start` start to start the client server
4. (optional) `yarn test` to run client tests

## Test requirements and my approach

The test requirements were:

- Make a simple React app that follows the design in AppDesignMobile.png. Ideally the app should be responsive.
- Fill out the front end tests and then make them pass by writing an app that consumes the API.

The included tests were: (1) should be able to increase and decrease product quantity; and (2) should be able to add items to the basket.

I started this test with the API, ensuring that the app was consuming the API and the correct data was being returned. This was my first time working with GraphQL, so I spent some time reading through the documentation to understand query syntax and using Insomnia for testing. When working with Django before, I used axios to fetch API data, however I realised that Apollo is the standard tool for GraphQL and React. I experimented with Apollo and succeeded in constructing the API call.

With the data coming through to the client, I focussed on building the app's core functionality as set out in the test requirements: being able to increase/decrease the product quantity and add items to the basket. Both of these elements are fully functional.

Once the main functionality was done, I styled the app with Sass. I used BEM for class naming conventions to try and keep my Scss organised and aligned with React components, and some of Sass's benefits like variables and partials.

My final step was to fill out the frontend tests and ensure the client passed them. I left this to the end as I haven't had a lot of experience with React Testing Library, and didn't want to lose time rewriting tests throughout the challenge. My tests check that the quantity and add to basket functions work as the user would expect, increasing the quantity value on the page and visibly adding an item to the basket. In retrospect, taking a TDD approach would have been better for this challenge, but I'm happy as the client is passing both frontend tests.

All in all, I really enjoyed this challenge. I had the chance to build on my fundamentals and get exposure to new technologies like GraphQL and Apollo.

## Potential Improvements

If I had more time, I would have liked to work on transitions when there is user interaction, for example when a user clicks 'add to cart', introducing a short delay before the quantity resets to 1, and having a success notification. Also, I'd like to improve the add to basket function so it updates just the quantity if the product is already in the basket.

I also would have liked to spend more time on styling. I'm happy with the outcome compared to the provided design, but the reponsive design and accessibility could be improved.

Finally, I would have preferred to try taking a TDD approach to building the app, where I tested each aspect of the app's fucntionality before moving on to the next.

## Technologies Used

### Back end

- Python
- Django
- GraphQL

### Front end

- HTML5
- SCSS
- React
- JavaScript
- Apollo Client

### Testing

- React Testing Library
- Insomnia
