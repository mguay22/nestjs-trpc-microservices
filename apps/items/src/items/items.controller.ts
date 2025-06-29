import { Body, Controller, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemRequest } from './dto/create-item.request';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  async createItem(@Body() request: CreateItemRequest) {
    return this.itemsService.createItem(request);
  }
}
