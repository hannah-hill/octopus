# Octopus Front End Test

I really enjoyed this code test! It was a great chance for me to build on my knowledge and work with some new technologies, particularly GraphQL and Apollo.

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

## My approach

I started this test with the API, ensuring that the app was consuming the API and the correct data was being returned. This was my first time working with GraphQL, so I spent some time reading through the documentation to understand query syntax and using Insomnia for testing. When working with Django before, I used axios to fetch API data, however I realised that Apollo is the standard tool for GraphQL and React. I experimented with Apollo and succeeded in constructing the API call.

With the data coming through to the client, I focussed on building the app's core functionality as set out in the test requirements: being able to increase/decrease the product quantity and add items to the basket. Both of these elements are fully functional.

Once the test requirements were done, I styled the app with Sass. I used BEM for class naming conventions to try and keep my Scss organised and aligned with React components, and some of Sass's benefits like variables and partials.

## Potential Improvements

If I had more time, I would have liked to work on transitions when there is user interaction, for example when a user clicks 'add to cart', introducing a short delay before the quantity resets to 1, and having a success notification. Also, I'd like to improve the add to basket function so it updates just the quantity if the product is already in the basket.

I also would have liked to spend more time on styling. I'm happy with the outcome compared to the provided design, but I think the reponsive design could be improved.

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

- Jest
- Insomnia

#### Brief

This example project was pinched from a
[graphene-django example app](https://github.com/graphql-python/graphene-django/tree/master/server/app).
and [Create React App](https://create-react-app.dev/docs/getting-started/).  
The project contains two apps - a django app named `products` and a react app
named `shop`.

In this code test, you'll be asked to:

- Make a simple React app that follows the design in AppDesignMobile.png. Ideally the app should be responsive.
- Fill out the front end tests and then make them pass by writing an app that consumes the API.

We've included a sample create react app project for your convenience, but you're welcome to swap
it out for another framework if you prefer. You're also welcome to write more tests for other
parts of the application - but design those however you like.

## Getting started

We assume you have access to a unix environment - if this poses a real problem please let us know.

First you'll need to install your dependencies

```bash
# Navigate into the django project
cd octopus/server
```

It is good idea (but not required) to create a virtual environment
for this project. We'll do this using
[virtualenv](http://docs.python-guide.org/en/latest/dev/virtualenvs/)
to keep things simple.

```bash
# Create a virtualenv in which we can install the dependencies
virtualenv env
source env/bin/activate
```

Now we can install our dependencies:

```bash
pip install -r requirements.txt
```

To add some data to your database do the following:

```bash
./manage.py migrate
# Load some example data
./manage.py loaddata products
```

Now you should be ready to start the server:

```bash
./manage.py runserver 8000
```

Here is the [query to run to get you started](<http://127.0.0.1:8000/graphql#operationName=getProductById&query=query%20getProductById%20%7B%0A%20%20product(productId%3A%201)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20power%0A%20%20%20%20description%0A%20%20%20%20price%0A%20%20%20%20quantity%0A%20%20%20%20brand%0A%20%20%20%20weight%0A%20%20%20%20height%0A%20%20%20%20width%0A%20%20%20%20length%0A%20%20%20%20modelCode%0A%20%20%20%20colour%0A%20%20%20%20imgUrl%0A%20%20%7D%0A%7D%0A>)

Once you have your server running, you're ready to install the front end dependencies

```bash
# Navigate into the react app
cd octopus/client

# install dependencies
yarn

# start the server
yarn start
```

You should be able to see the Hello World message.

## Running the tests

You can run the front end tests by navigating to the directory

```bash
cd octopus/client
yarn test
```

Press `a` to run all the tests. This should give you two failures:

```bash
 FAIL  src/App.test.js
  ✕ should be able to increase and decrease product quantity
  ✕ should be able to add items to the basket
```

So the task is to make the a client that passes these tests :)

Best of luck!
