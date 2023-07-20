import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ServiceNameService from 'App/Services/Fetchdata'
import Validator2Validator from 'App/Validators/Validator2Validator'

export default class Controller1sController {
  public async index({}: HttpContextContract) {
    return "params.post"
  }

  public async create({params}: HttpContextContract) {
    // return params.post
  }

  public async store({params}: HttpContextContract) {
    return 'creating a posts'
  }

  public async show({params}: HttpContextContract) {
    return  `get single posts with an id of ${typeof params.id}`
  }

  public async edit({params}: HttpContextContract) {
    const post = params.post;
const comments = params.comment;

const result = `${post} ${comments}`;
return result;

  }

  public async update({params}: HttpContextContract) {
    const post = params.post;
    const comments = params.comment;
    
    const result = `${post} ${comments}`;
    return result;
      }

  public async destroy({}: HttpContextContract) {
    return "destroy"
  }
}
