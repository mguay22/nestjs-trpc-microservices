import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';
import { CreateItemRequest } from './dto/create-item.request';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [];

  async createItem(request: CreateItemRequest) {
    const newItem: Item = {
      ...request,
      id: Math.random().toString(36).substring(2, 15),
    };
    this.items.push(newItem);
    return newItem;
  }
}
