import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please enter your username'],
    unique: [true, 'Username already exists'],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Username invalid, it should contain 8-20 alphanumeric letters and be unique!',
    ],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: [true, 'Email already exists'],
  },
  image: {
    type: String,
  },
});

const User = models.User || model('User', userSchema);

export default User;
