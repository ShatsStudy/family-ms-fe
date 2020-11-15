import { FilterUsersByPipe } from './filter-users-by.pipe';
import { User } from '../../common/models/user';
import { } from '../contact-info/contact-info.component';
import { throwError } from 'rxjs';

describe('FilterUsersByPipe', () => {
  let filter: string;
  const dummyUsers: Array<User> = [
    {
      watched_issues: [],
      _id: '5cbb6d7ba4908a0db878c37a',
      firstName: 'Dmytro',
      lastName: 'Sobakapirat',
      position: 'Senior pomidor developer',
      email: 'sobaka-ne-vmerla@gmail.com',
      phone: '3801111111',
      photoURL: 'http://res.cloudinary.com/dd1mk/image/upload/v1555326362/hrms/avatars/iq5boujmnj2u0udtiyl7.jpg',
      type: 'dev',
      contacts: [],
      dates: []
    }
  ];

  it('create an instance', () => {
    const pipe = new FilterUsersByPipe();
    expect(pipe)
      .toBeTruthy();
  });

  it('if there is no filters return all users', () => {
    const pipe = new FilterUsersByPipe();
    filter = '';
    expect(pipe.transform(dummyUsers, filter))
      .toBe(dummyUsers);
  });

  it('filter users by firstName', () => {
    const pipe = new FilterUsersByPipe();
    filter = 'GIveMe';
    expect(pipe.transform(dummyUsers, filter))
      .toEqual(dummyUsers.filter(user => user._id === '5cbb6d7ba4908a0db878c56c'));
  });

  it('filter users by lastName', () => {
    const pipe = new FilterUsersByPipe();
    filter = 'Sobakapirat';
    expect(pipe.transform(dummyUsers, filter))
      .toEqual(dummyUsers.filter(user => user._id === '5cbb6d7ba4908a0db878c37a'));
  });
});
