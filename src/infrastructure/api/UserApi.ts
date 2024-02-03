import request from '@/infrastructure/api/request.ts'
import UserLoginBO from '@/infrastructure/pojo/bo/UserLoginBO.ts'

class UserApi {
  public static async login(params: UserLoginBO): Promise<string> {
    return await request.post('/user/login', params, { showLoading: false })
  }
}

export default UserApi
