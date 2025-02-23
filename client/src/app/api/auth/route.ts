// User model interface
export interface IUser {
  id?: string;
  email: string;
  username: string;
  password: string;
  bought?: any[];
  balance?: number;
  crypto?: string;
}

class User implements IUser {
  id?: string;
  email: string;
  password: string;
  username: string;
  bought?: any[];
  balance?: number;
  crypto?: string;

  constructor(user: Pick<IUser, 'email' | 'password' | 'username'>) {
    this.email = user.email;
    this.password = user.password;
    this.username = user.username;
    this.bought = [];
    this.balance = 0;
    this.crypto = '0x' + Array.from({ length: 40 }, () =>
      Math.floor(Math.random() * 16).toString(16)).join('');
  }
}

class UserRepository {
  private static users: Map<string, User> = new Map();

  static async add(user: Pick<IUser, 'email' | 'password' | 'username'>): Promise<IUser> {
    let newUser = new User(user);
    newUser.id = crypto.randomUUID();
    this.users.set(newUser.id, newUser);
    const savedUser = await UserRepository.findById(newUser.id);
    if (!savedUser) throw new Error('Failed to create user');
    return savedUser;
  }

  static async findByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  static async findById(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  static async update(id: string, userData: Partial<User>): Promise<void> {
    const user = this.users.get(id);
    if (!user) throw new Error('User not found');
    Object.assign(user, userData, { updatedAt: new Date() });
  }

  static async delete(id: string): Promise<void> {
    this.users.delete(id);
  }

  static async list(): Promise<User[]> {
    return Array.from(this.users.values());
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, email, password, username } = body as {
      action: 'register' | 'login',
      email?: string,
      username?: string,
      password: string
    };

    if (action === 'register') {
      const data = await UserRepository.add({ email: email!, password, username: username! });
      return Response.json({ success: true, data });
    } else if (action === 'login') {
      const user = await UserRepository.findByEmail(email ?? username ?? '');
      return Response.json({ success: true, data: user });
    }
    throw new Error('Invalid action');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return Response.json({ success: false, data: errorMessage });
  }
}
