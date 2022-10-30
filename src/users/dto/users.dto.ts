import { UserEntity } from '../user.entity';
// import { v1 as uuidv1 } from 'uuid';

export class UserDto implements Readonly<UserDto> {
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;

  public static from(user: UserDto): UserEntity {
    return <UserEntity>{
      id: '0f3e6ee0-57f4-11ed-909b-0d15a4168128',
      firstName: user.firstName,
      lastName: user.firstName,
      email: user.email,
      active: user.active,
    };
  }
}
