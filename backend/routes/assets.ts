import type { Router } from "express";
import { assets } from "../constants";
// import passport from "passport";
import { isAdmin } from '../middlewares/auth'


export const useAssetRoute = (app: Router) => {

  // "name",
  // "address",
  // "worth",
  // "units",
  // "unit_cost",
  // "minimum_buy",

  app.post('/assets/new', isAdmin, (req, res) => {
    try {
      const user = res.locals.user
      if (user?.admin) {
        const asset = { 
          id: assets.assets.length + 1, 
          name: req.body.name, 
          location: req.body.location,
          worth: Number(req.body.worth),
          units: Number(req.body.units),
          unit_cost: Number(req.body.unit_cost),
          minimum_buy: Number(req.body.minimum_buy),
          sold: 0, 
          image: 'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg' 
      }

        assets.add(asset)
        return res.status(200).json(asset);
      }
      return res.status(400).json({ success: false })

    } catch (e) {
      console.log(e)
      // return res.status(400).json({ success: false });
    }
  });

  app.get("/assets/all", (_, res) => {
    // res.setHeader('Access-Control-Allow-Credentials', 'true');
    // console.log(assets.assets)
    return res.status(200).json(assets.assets)
  })

  // app.post('/buy/:id', passport.authenticate('jwt', { session: true }), (req, res) => {
  //   if (!req.user) return res.json({ success: false })
  //   const id = req.params.id
  //   const buyer = req.user as { id: number }
  //   const amount = req.body.amount
  //   // const done = sell(Number(id), Number(amount), buyer.id);
  //   return res.json()
  // })
}