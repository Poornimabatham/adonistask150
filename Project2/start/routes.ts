/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

// Route.get('users',"Controller1sController.index")

Route.resource("users", "Controller1sController").only(["index", "destroy"]);

//   Route.resource('posts', 'Controller1sController').apiOnly() 

//   Route
//   .resource('users', 'Controller1sController')
//   .paramFor('use', 'use')

//   Route
//   .resource('user/:i', 'CommentsController')
//   .paramFor('user', 'i')
//   .paramFor('comments', 'v')

// Route
//   .resource('users', 'Controller1sController')
//   .paramFor('use', 'us')

// Route
//   .resource('posts.comments', 'Controller1sController')
//   .paramFor('posts', 'post')
//   .paramFor('comments', 'comment')

// Route.shallowResource('posts.comments', 'Controller1sController')


Route.group(()=> {
    Route.group(()=>{
        Route.get('/','Controller1sController.index').as('index')
        Route.get('/:id', 'Controller1sController.show').as('show')
        Route.post('/','Controller1sController.store').as('store')
        Route.put('/:id',async({params})=> 'updating a post with and id of ${params.id}').as('update')
    }).prefix('/posts').as('posts')
}).as('app')



Route.group(()=> {
    Route.group(()=>{
        Route.get('/','PostsController.index').as('index')
        Route.get('/:id', 'PostsController.show').as('show')
        Route.post('/','PostsController.store').as('store')
    }).prefix('/posts').as('posts')
}).namespace('App/Controllers/Http/Admin').prefix('admin')





Route.group(()=> {
    Route.group(()=>{
        Route.get('/','UsersController.index').as('index')
        Route.get('/:id', 'UsersController .show').as('show')
        Route.post('/','UsersController .store').as('store')
    }).prefix('/post').as('post')
}).namespace('App/Controllers/Http/Employee').prefix('user')
