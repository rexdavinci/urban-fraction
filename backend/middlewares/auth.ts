import type { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { users } from "../constants";



export function isAdmin(req: Request, res: Response, next: NextFunction) {
  let token = null;
  try {
    if (req && req.headers['authorization']) {
      token = req.headers['authorization'];
      token = jwt.verify(token.slice(token.indexOf('ey')), 'your_jwt_secret') as unknown as any
      res.locals.user = users.find(token.sub)
      return next();
    } else {
      return res.json({ success: false, message: 'Unauthorized' });
    }
    
  } catch(e: any) {
    return res.json({ success: false, message: e.message });

  }
} 
