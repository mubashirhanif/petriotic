import { User } from './../../app/models/user.interface';
import { Gender } from './../../app/models/gender.enum';

const users: User[] = [
  {
    id: '1',
    email: 'aisha@user.com',
    gender: Gender.FEMALE,
    country: 'Pakistan'
  },
  {
    id: '2',
    email: 'bushra@user.com',
    gender: Gender.FEMALE,
    country: 'Canada'
  },
  {
    id: '3',
    email: 'danyal@user.com',
    gender: Gender.MALE,
    country: 'Egypt'
  },
  {
    id: '4',
    email: 'eeman@user.com',
    gender: Gender.FEMALE,
    country: 'France'
  },
  {
    id: '5',
    email: 'fahad@user.com',
    gender: Gender.MALE,
    country: 'Pakistan'
  },
  {
    id: '6',
    email: 'henry@user.com',
    gender: Gender.MALE,
    country: 'United Kingdom'
  },
  {
    id: '7',
    email: 'indigo@user.com',
    gender: Gender.FEMALE,
    country: 'Australia'
  },
  {
    id: '8',
    email: 'julie@user.com',
    gender: Gender.FEMALE,
    country: 'USA'
  },
  {
    id: '9',
    email: 'khizer@user.com',
    gender: Gender.MALE,
    country: 'Qatar'
  },
  {
    id: '10',
    email: 'lyba@user.com',
    gender: Gender.FEMALE,
    country: 'Australia'
  },
];

export default users;
