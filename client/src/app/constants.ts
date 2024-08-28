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
}


const initAssets = [
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
    monthly_rent: 3000
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
    monthly_rent: 5000
  },
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


const initUsers = [{ id: 1, username: 'user1', password: '123', admin: false, bought: [] as any, balance: 400 },
{ id: 4, username: 'admin', password: '123', admin: true, bought: [] as any, balance: 15 },]

type IUser = { id: number; username: string; password: string, admin: boolean, bought: any; balance: number }
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

  buyAsset(id: number, units: number, asset: number) {
    this.users = this.users.map(u => {
      if (id === u.id) {
        return { ...u, bought: [...u.bought, { asset, units }] }
      }
      return u
    })
  }
}

export const assets = new Asset();
export const users = new User();

class Trade {

  buy(assetId: number, amount: number, userId: number) {
    const asset = assets.buy(assetId, amount)
    users.buyAsset(userId, amount, asset!.id)
    return users.users.find(u => u.id === userId)
  }

}

export const trade = new Trade();









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