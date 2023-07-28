import Redis from "@ioc:Adonis/Addons/Redis";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Auth from "App/Models/Auth";
import User from "App/Models/User";
const jwt = require('jsonwebtoken')
export default class UsersController {
  public async index() {
    return User.all();
  }

  // public async store({request,response}:HttpContextContract){
  //     User.create({email:request.input('email'),password:request.input('password')})
  //     return response.send({'created':true})
  // }

  // public async update({request,response,params}:HttpContextContract){
  //     const user:any= await User.findOrFail(params.id)
  //     // return Update
  // user.email = request.input('email')
  //    user.save()
  //    return response.status(202).send(user)
  // }

  public async register({ request, response,auth }: HttpContextContract) {
   

    try {
      const userData = request.only(['email', 'password']);
      
      // Check if a user with the given email already exists
      const existingUser = await Auth.findBy('email', userData.email);
      if (existingUser) {
        return response.status(400).json({
          message: 'User with this email already exists.',
        });
      }

      // Create a new user record
      const user:any = await Auth.create(userData);



      // return user.id

    //   // Generate the token
    // const payload = { userId: user.id ,email:user.email}; // Customize this payload as per your requirements
    // const secretKey = '10'; // Replace this with your actual secret key
    // // const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    // const token = await auth.use('api').generate(user)

    

    const payload:any = { id: user.id, email: user.email }; // Customize this payload as per your requirements
    // const secretKey = 'your_secret_key'; // Replace this with your actual secret key
    const token = await auth.use('api').generate(payload);
    return token
    
      return response.status(201).json({
        message: 'User registered successfully!',
        user,
      });
    } catch (error) {
      return response.status(400).json({
        message: 'Registration failed.',
        error: error.message,
      });
    }
  }

















  


}
