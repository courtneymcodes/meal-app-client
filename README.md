# Meal Buddy App Client

Meal Buddy is a virtual kitchen assistant that helps you manage your recipes and grocery list. This repository is the client side of a full stack application that connects with the [Meal Buddy server](https://github.com/courtneymcodes/meal-app-server). 

## Tools and Technologies

- Typescript
- Angular
- Bootstrap


## Planning 




## Approach
The development process began with creating the [backend api](https://github.com/courtneymcodes/meal-app-server). Once the backend was built, I created a new Angular application. I began by creating the components and settting up the file structure. Then I created the url paths in the app-routing.module.ts file and began creating templates. I used Angular's HttpClient to make Http requests to connect the frontend application with the backend. I used [Github Projects](https://github.com/users/courtneymcodes/projects/2/views/1) to help track tasks and my progress during the development process. 


## Future Developments and Bug Fixes

- Fix bug when adding ingredients from recipe favorites list to shopping list
- Add error messages for user

## Installation Instructions

1. Clone this repository
2. Run npm install in your terminal 
3. Type ng serve in your terminal to start the server
4. Make sure the backend server is running 

## Additional Resources

This applicatoin uses the [Spoonacular Api](https://spoonacular.com/food-api) in the discover section of the application to retrieve random recipes for the user. The data retrieved from the api can be saved to the users favorites list.

I used an interceptor to simplify my code for adding Json Web Tokens to the authorization headers of every Http request to the backend with the help of [this article](https://medium.com/@ogun.ergin35/automating-jwt-authentication-in-angular-with-an-http-interceptor-5bb2f3ab5572#:~:text=To%20test%20the%20JWT%20interceptor%2C%20you%20can%20use,Finally%2C%20make%20an%20HTTP%20request%3A%20this.http.get%28%27%2Fapi%2Fprotected-resource%27%29.subscribe%28%28response%29%20%3D%3E%20%7B).