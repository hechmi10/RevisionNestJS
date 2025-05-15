/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SignupDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
      @InjectModel(User.name) private userModel: Model<User>,
      private jwtService: JwtService,
    ) {}
  
    
    async signup(dto: SignupDto) {
      const hashedPassword = await bcrypt.hash(dto.password, 10);
      const user = new this.userModel({
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
      });
      await user.save();
      return { message: 'User created successfully' };
    }
  
    async signin(dto: SigninDto) {
      const user = await this.userModel.findOne({ email: dto.email });
      if (!user || !(await bcrypt.compare(dto.password, user.password))) {
        throw new UnauthorizedException('Invalid credentials');
      }
  
      const payload = { sub: user._id, email: user.email };
      const token = this.jwtService.sign(payload);
      return { access_token: token };
    }
}
