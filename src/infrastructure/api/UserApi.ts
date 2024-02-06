import request from '@/infrastructure/api/request.ts'
import UserLoginBO from '@/infrastructure/pojo/bo/UserLoginBO.ts'
import UserEntity from '@/infrastructure/pojo/entity/UserEntity.ts'

class UserApi {
  public static PREFIX_URL: string = '/user'

  public static async login(params: UserLoginBO): Promise<string> {
    return await request.post(UserApi.PREFIX_URL + '/login', params, null)
  }

  public static async getCurrentUserInfo(): Promise<UserEntity> {
    return await request.get(UserApi.PREFIX_URL + '/getCurrentUserInfo', null, null)
  }
}

export default UserApi
