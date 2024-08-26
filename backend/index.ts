import express, { type Request } from 'express'
import session from 'express-session'
import cors from 'cors'
import { useUserRoute, useAssetRoute } from './routes'

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: 'something something',
  resave: false,
  saveUninitialized: false
}))


const whitelist = ['http://localhost:3000']
const corsOptionsDelegate = function (req: Request, callback: any) {
  // allowedHeaders: 'Content-Type,Authorization'
  let corsOptions = { origin: false, credentials: true, methods: 'GET,POST,PUT,DELETE' };
  if (whitelist.indexOf(req.header('Origin')!) !== -1) {
    corsOptions.origin = true
  }
  callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate))

useUserRoute(app)
useAssetRoute(app)



const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// function sell(property: number, amount: number, buyer: number) {
//   let isEffected = '';
//   users = users.map(u => {
//     if (u.id === buyer) {
//       let unitCost = 9999999999999;
//       let units = 9999999999999;
//       let spendable = 9999999999999;
//       let minimumBuy = 9999999999999;
//       const balance = u.balance
//       let asset = properties.find(p => p.id === property);
//       if (asset) {
//         unitCost = asset.unitCost;
//         units = asset.units;
//         spendable = amount * unitCost;
//         minimumBuy = asset.minimumBuy;
//         if (spendable > balance) {
//           isEffected = 'balance too low'
//         } else if ((units - amount) < 0) {
//           isEffected = 'order volume too high'
//         } else if (amount < minimumBuy) {
//         } else {
//           properties = properties.map(p => {
//             if (p.id === property) {
//               return { ...p, sold: p.sold + amount }
//             }
//             return p;
//           });
//           return {
//             ...u,
//             bought: [...u.bought, { id: property, amount, time: Date.now() }],
//             balance: balance - spendable
//           }
//         }
//       }
//     }
//     return u;
//   });

//   return !isEffected ? users.find(u => u.id === buyer) : { reason: isEffected }

// }

// setTimeout(() => {

// }, 5 * 1000)

// Card Number
// 4199536744620473
// Full Name
// Novaleigh Benefield
// CVV
// 878
// Pin
// 7793
// Expiration Date
// 08/2028


// Card Number
// 5299113076928399
// Full Name
// Daila Soles
// CVV
// 595
// Pin
// 5575
// Expiration Date
// 04/2027