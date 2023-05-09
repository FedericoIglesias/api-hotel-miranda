import passport from "passport";
import { Strategy } from "passport-local";
import { getUsers } from "./usersService";
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const user = getUsers();

passport.use( 'login',
  new Strategy(
    {
      usernameField: "name",
      passwordField: "password",
    },
    async (name, password) => {
      user.filter((u) => u.name !== name);
      if (!user) {
        throw new Error("user not found");
      }
      if (user[0].password !== password) {
        throw new Error("password invalid");
      }

      return user;
    }
  )
);


passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'TOP_SECRET',
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
    },
    async (token: any, done: any) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

export default passport