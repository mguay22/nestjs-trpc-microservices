import { CreateItemRequest } from './dto/create-item.request';

export interface Item extends CreateItemRequest {
  id: string;
}
