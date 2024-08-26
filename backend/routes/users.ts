import type { Router, Request } from "express";
import { users } from "../constants";
import jwt from 'jsonwebtoken'

const cookieExtractor = function (req: Request) {
  let token = null;
  if (req && req.headers['authorization']) {
    token = req.headers['authorization'];
    token = token.slice(token.indexOf('ey'))
  }
  return token;
};


export const useUserRoute = (app: Router) => {


  app.get("/",  (req, res) => {
    // console.log(req.user)
    if (!req.user) return res.json({ success: false })
    // const user = req.user as { id: number }
    // const profile = users.find(Number(user.id));
    // return res.status(200).json(profile)
    return res.json()
  })

  app.post('/register', (req, res) => {
    const user = { id: users.users.length, ...req.body }
    users.register(user);
    return res.status(201).json({ message: 'Registered Successfully' });
  });

  app.post('/login', (req, res) => {
    const user = users.login(req.body.username, req.body.password);
    if (user) {
      const payload = { sub: user.id };
      const token = jwt.sign(payload, 'your_jwt_secret');
      return res.json({ message: 'Logged in successfully', token });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
  });
}
