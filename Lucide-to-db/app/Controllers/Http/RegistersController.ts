import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { scope } from '@ioc:Adonis/Lucid/Orm'
import { schema,rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import Auth from 'App/Models/Auth'
export default class RegistersController {
  public async index({request}: HttpContextContract) {

    const Schema= await schema.create({
      email:schema.string({},[rules.email()]),
    password:schema.string({},[rules.confirmed()])

      })
      const data:any = request.validate({schema:Schema})
      // return validdata
     const user = await Auth.create(data)

     return user
  }

  public async Login({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
