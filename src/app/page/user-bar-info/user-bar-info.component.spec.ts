import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBarInfoComponent } from './user-bar-info.component';
import { UserImageComponent } from './user-image/user-image.component';
import { LinkToProfileComponent } from './link-to-profile/link-to-profile.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../../common/models/user';
import { UserService } from '../../common/services/user.service';

describe('UserBarInfoComponent', () => {
  let component: UserBarInfoComponent;
  let fixture: ComponentFixture<UserBarInfoComponent>;
  let userService: UserService;
  const dummyUser: User = {
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
    dates: [],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LinkToProfileComponent,
        UserImageComponent,
        UserBarInfoComponent,
        UserImageComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBarInfoComponent);
    component = fixture.componentInstance;
    component.userinfo = dummyUser;
    userService = TestBed.get(UserService);
    spyOn(userService, 'getUserType').and
      .returnValue('customUserType');
    fixture.detectChanges();
  });

  it('return userType from Service', () => {
    expect(component.userType)
      .toEqual('customUserType');
  });
});
