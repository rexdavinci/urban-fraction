type IAsset = {
  name: string,
  id: number,
  location: string,
  worth: number,
  units: number,
  unit_cost: number,
  minimum_buy: number,
  sold: number,
  image: string;
  monthly_rent: number;
  exitDate: Date,
}


export const initAssets = [
  {
    name: "Apartment in Center Town",
    id: 1,
    location: '9790 Eliza Wells',
    worth: 450000,
    units: 410,
    unit_cost: 1.1,
    minimum_buy: 3,
    image: 'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg',
    sold: 410,
    monthly_rent: 3000,
    exitDate: new Date("2025-12-31"),
  },
  {
    name: "Great Place in Town",
    id: 2,
    location: '1231 Mellie Bun Crescent',
    worth: 750000,
    units: 200,
    unit_cost: 5,
    minimum_buy: 10,
    image: 'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg',
    sold: 150,
    monthly_rent: 5000,
    exitDate: new Date("2027-06-04"),
  },
  {
    name: "Luxury Penthouse Suite",
    id: 3,
    location: '789 Skyview Drive',
    worth: 1200000,
    units: 150,
    unit_cost: 8,
    minimum_buy: 5,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    sold: 50,
    monthly_rent: 8000,
    exitDate: new Date("2026-08-15"),
  },
  {
    name: "Riverside Apartments",
    id: 4,
    location: '456 River Road',
    worth: 680000,
    units: 300,
    unit_cost: 2.5,
    minimum_buy: 4,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    sold: 200,
    monthly_rent: 4000,
    exitDate: new Date("2027-03-21"),
  },
  {
    name: "Urban Loft Complex",
    id: 5,
    location: '234 Downtown Avenue',
    worth: 890000,
    units: 250,
    unit_cost: 3.8,
    minimum_buy: 6,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    sold: 100,
    monthly_rent: 5500,
    exitDate: new Date("2026-11-30"),
  },
  // Adding 17 more properties with similar structure but different values
  {
    name: "Mountain View Residences",
    id: 6,
    location: '567 Highland Street',
    worth: 920000,
    units: 180,
    unit_cost: 5.5,
    minimum_buy: 5,
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
    sold: 80,
    monthly_rent: 6000,
    exitDate: new Date("2027-09-15"),
  },
  {
    name: "Seaside Apartments",
    id: 7,
    location: '890 Beach Boulevard',
    worth: 1500000,
    units: 220,
    unit_cost: 7.2,
    minimum_buy: 8,
    image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
    sold: 120,
    monthly_rent: 9000,
    exitDate: new Date("2026-12-31"),
  },
  {
    name: "Garden View Complex",
    id: 8,
    location: '123 Park Lane',
    worth: 550000,
    units: 350,
    unit_cost: 1.8,
    minimum_buy: 3,
    image: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
    sold: 250,
    monthly_rent: 3500,
    exitDate: new Date("2027-05-20"),
  },
  {
    name: "City Center Plaza",
    id: 9,
    location: '456 Main Street',
    worth: 980000,
    units: 280,
    unit_cost: 3.9,
    minimum_buy: 5,
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
    sold: 180,
    monthly_rent: 6500,
    exitDate: new Date("2026-10-15"),
  },
  {
    name: "Sunset Heights",
    id: 10,
    location: '789 Hilltop Road',
    worth: 720000,
    units: 240,
    unit_cost: 3.2,
    minimum_buy: 4,
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
    sold: 140,
    monthly_rent: 4800,
    exitDate: new Date("2027-07-31"),
  },
  {
    name: "Metro Apartments",
    id: 11,
    location: '321 Station Square',
    worth: 850000,
    units: 260,
    unit_cost: 3.5,
    minimum_buy: 5,
    image: 'https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg',
    sold: 160,
    monthly_rent: 5200,
    exitDate: new Date("2026-09-30"),
  },
  {
    name: "Forest Edge Residences",
    id: 12,
    location: '654 Woodland Drive',
    worth: 680000,
    units: 320,
    unit_cost: 2.3,
    minimum_buy: 4,
    image: 'https://images.pexels.com/photos/2089699/pexels-photo-2089699.jpeg',
    sold: 220,
    monthly_rent: 4200,
    exitDate: new Date("2027-04-15"),
  },
  {
    name: "Lake View Towers",
    id: 13,
    location: '987 Lakeside Avenue',
    worth: 1100000,
    units: 190,
    unit_cost: 6.2,
    minimum_buy: 7,
    image: 'https://images.pexels.com/photos/2089700/pexels-photo-2089700.jpeg',
    sold: 90,
    monthly_rent: 7500,
    exitDate: new Date("2026-11-20"),
  },
  {
    name: "Valley Heights",
    id: 14,
    location: '753 Valley Road',
    worth: 620000,
    units: 280,
    unit_cost: 2.4,
    minimum_buy: 4,
    image: 'https://images.pexels.com/photos/2089701/pexels-photo-2089701.jpeg',
    sold: 180,
    monthly_rent: 3800,
    exitDate: new Date("2027-02-28"),
  },
  {
    name: "Urban Oasis",
    id: 15,
    location: '159 City Center',
    worth: 950000,
    units: 230,
    unit_cost: 4.4,
    minimum_buy: 6,
    image: 'https://images.pexels.com/photos/2089702/pexels-photo-2089702.jpeg',
    sold: 130,
    monthly_rent: 6200,
    exitDate: new Date("2026-08-31"),
  },
  {
    name: "Royal Heights",
    id: 16,
    location: '852 Crown Street',
    worth: 1300000,
    units: 170,
    unit_cost: 8.2,
    minimum_buy: 8,
    image: 'https://images.pexels.com/photos/2089703/pexels-photo-2089703.jpeg',
    sold: 70,
    monthly_rent: 8500,
    exitDate: new Date("2027-06-30"),
  },
  {
    name: "Park View Estate",
    id: 17,
    location: '741 Park Avenue',
    worth: 880000,
    units: 290,
    unit_cost: 3.2,
    minimum_buy: 5,
    image: 'https://images.pexels.com/photos/2089704/pexels-photo-2089704.jpeg',
    sold: 190,
    monthly_rent: 5800,
    exitDate: new Date("2026-12-15"),
  },
  {
    name: "Maple Grove Residences",
    id: 18,
    location: '963 Maple Street',
    worth: 760000,
    units: 310,
    unit_cost: 2.6,
    minimum_buy: 4,
    image: 'https://images.pexels.com/photos/2089705/pexels-photo-2089705.jpeg',
    sold: 210,
    monthly_rent: 4600,
    exitDate: new Date("2027-03-31"),
  },
  {
    name: "Harbor View",
    id: 19,
    location: '357 Harbor Road',
    worth: 1400000,
    units: 160,
    unit_cost: 9.2,
    minimum_buy: 9,
    image: 'https://images.pexels.com/photos/2089706/pexels-photo-2089706.jpeg',
    sold: 60,
    monthly_rent: 9500,
    exitDate: new Date("2026-10-31"),
  },
  {
    name: "Golden Gate Residences",
    id: 20,
    location: '951 Golden Avenue',
    worth: 1050000,
    units: 200,
    unit_cost: 5.5,
    minimum_buy: 7,
    image: 'https://images.pexels.com/photos/2089707/pexels-photo-2089707.jpeg',
    sold: 100,
    monthly_rent: 7000,
    exitDate: new Date("2027-01-15"),
  },
  {
    name: "Silver Springs",
    id: 21,
    location: '753 Spring Street',
    worth: 820000,
    units: 270,
    unit_cost: 3.2,
    minimum_buy: 5,
    image: 'https://images.pexels.com/photos/2089708/pexels-photo-2089708.jpeg',
    sold: 170,
    monthly_rent: 5100,
    exitDate: new Date("2026-07-31"),
  },
  {
    name: "Emerald Tower",
    id: 22,
    location: '159 Emerald Way',
    worth: 980000,
    units: 240,
    unit_cost: 4.3,
    minimum_buy: 6,
    image: 'https://images.pexels.com/photos/2089709/pexels-photo-2089709.jpeg',
    sold: 140,
    monthly_rent: 6800,
    exitDate: new Date("2027-08-31"),
  }
]

class Asset {
  assets = initAssets;

  constructor() {
    setInterval(() => {
      this.assets = initAssets
    }, 1000 * 5);
  }

  add(asset: IAsset) {
    const item = { ...asset, sold: 0 }
    this.assets.push(item);
  }

  find(assetId: number) {
    return this.assets.find(a => a.id === assetId)
  }

  findAll(ids: number[]) {
    return this.assets.filter(a => ids.includes(a.id))
  }

  buy(id: number, amount: number) {
    this.assets = this.assets.map(a => {
      if (id === a.id) {
        return { ...a, sold: a.sold + amount }
      }
      return a
    })
    return this.assets.find(a => a.id === id);
  }
}


const initUsers = [{ id: 1, username: 'user', password: '123', admin: false, bought: [] as any, balance: 400, crypto: '' },
{ id: 4, username: 'admin', password: '123', admin: true, bought: [] as any, balance: 10000, crypto: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' },]

type IUser = { id: number; username: string; password: string, admin: boolean, bought: any; balance: number; crypto: string }
class User {
  users = initUsers

  constructor() {
    setInterval(() => {
      this.users = initUsers
    }, 1000 * 5);
  }

  register(user: IUser) {
    this.users.push(user)
  }

  login(username: string, password: string) {
    return this.users.find(u => u.username === username && u.password === password);
  }

  find(id: number) {
    return this.users.find(u => u.id === id);
  }

  updateUser(id: number, username: string, crypto: string) {
    this.users = this.users.map(u => {
      if (u.id !== id) {
        return u
      }
      return { ...u, username, crypto }
    })
    return this.users.find(u => u.id === id);
  }

  buyAsset(id: number, units: number, asset: number, cost: number) {
    this.users = this.users.map(u => {
      if (id === u.id) {
        return { ...u, bought: [...u.bought, { asset, units, time: Date.now() }], balance: u.balance - cost }
      }
      return u
    })
    return this.users.find(u => u.id === id)
  }
}

class Trade {
  assets
  users
  constructor(assets: Asset, users: User) {
    this.assets = assets;
    this.users = users;
  }
  buy(assetId: number, units: number, user: number, cost: number) {
    const asset = this.assets.buy(assetId, units)
    return { user: this.users.buyAsset(user, units, asset!.id, cost), assets: this.assets.assets }
  }
}

export const makeCurrencySpace = (curr: string) => curr.replace("CA$", "CA$ ") 


export { Trade, Asset, User }



export const myInvestments = [
  {
    id: 1,
    name: "Luxury Beachfront Villa",
    location: "Miami, FL",
    units: 5,
    rentalYield: "8.2%",
    value: 42000,
    growth: 5.2,
    occupancyRate: "95%",
    monthlyRevenue: 3200,
    exitDate: "2024-12-31",
  },
  {
    id: 2,
    name: "Downtown Penthouse",
    location: "New York, NY",
    units: 3,
    rentalYield: "7.5%",
    value: 68000,
    growth: 4.8,
    occupancyRate: "92%",
    monthlyRevenue: 4500,
    exitDate: "2025-2-31",
  },
  {
    id: 3,
    name: "Modern Tech Hub Office",
    location: "San Francisco, CA",
    units: 2,
    rentalYield: "9.1%",
    value: 85000,
    growth: 6.3,
    occupancyRate: "98%",
    monthlyRevenue: 6200,
    exitDate: "2034-5-25",
  },
  {
    id: 4,
    name: "Suburban Family Home",
    location: "Los Angeles, CA",
    units: 4,
    rentalYield: "7.8%",
    value: 55000,
    growth: 5.0,
    occupancyRate: "93%",
    monthlyRevenue: 3800,
    exitDate: "2034-5-25",
  },
  {
    id: 5,
    name: "Urban Loft",
    location: "Chicago, IL",
    units: 3,
    rentalYield: "8.0%",
    value: 47000,
    growth: 5.5,
    occupancyRate: "90%",
    monthlyRevenue: 3500,
    exitDate: "2034-5-25",
  },
  {
    id: 6,
    name: "Luxury Mountain Resort",
    location: "Aspen, CO",
    units: 6,
    rentalYield: "10.2%",
    value: 92000,
    growth: 6.8,
    occupancyRate: "97%",
    monthlyRevenue: 8100,
    exitDate: "2034-5-25",
  },
  {
    id: 7,
    name: "Riverside Cottage",
    location: "Austin, TX",
    units: 2,
    rentalYield: "7.3%",
    value: 39000,
    growth: 4.5,
    occupancyRate: "88%",
    monthlyRevenue: 2900,
    exitDate: "2034-5-25",
  },
];




// {
//   id: 3,
//   address: '584 Marley Meadow',
//   cost: 680000,
//   units: 860,
//   unitCost: 1.2,
//   minimumBuy: 5,
//   sold: 0,
// },
// {
//   id: 4,
//   address: '48205 Volkman Junction',
//   cost: 780000,
//   units: 500,
//   unitCost: 1.5,
//   minimumBuy: 3,
//   sold: 0,
// },
// {
//   id: 5,
//   address: '6419 Orlo Springs',
//   cost: 573000,
//   units: 420,
//   unitCost: 1.8,
//   minimumBuy: 2,
//   sold: 0,
// },



// { id: 2, username: 'user2', password: '123', admin: false, bought: [] as any, balance: 20 },
// { id: 3, username: 'user3', password: '123', admin: false, bought: [] as any, balance: 250 },