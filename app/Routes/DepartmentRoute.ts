import Route from '@ioc:Adonis/Core/Route'


Route.get('/getdepartment','DepartmentsController.getdepartment').middleware(['throttle:global','auth'])
Route.post('/addDept','DepartmentsController.addDept').middleware('throttle:global')
Route.post('/updatedept','DepartmentsController.updatedept').middleware('throttle:global')
