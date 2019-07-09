import { schema } from 'normalizr';

export const user = new schema.Entity('users');
export const User = new schema.Entity('users');
export const Users = [user];
export const Product = new schema.Entity('products');
export const ProductWithOwner = new schema.Entity('products', {
  owner: user,
});

export const ProductList = new schema.Array(Product);

export const sellerList = { list: [Product] };

export const Message = new schema.Entity('messages', undefined, {
  idAttribute: (entity) => `${entity.id}-${entity.chatId}`,
});

export const MessageCollection = [Message];

export const Chat = new schema.Entity('chats');

const Chats = new schema.Entity('chats', {
  lastMessage: Message,
});

export const ChatCollection = [Chats];
