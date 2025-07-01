import { Inject, Injectable } from '@nestjs/common';
import { Item } from './item.interface';
import { CreateItemRequest } from './dto/create-item.request';
import { CLIENTS } from '../clients/clients.constants';
import { Clients } from '../clients/clients.interface';

@Injectable()
export class ItemsService {
  constructor(@Inject(CLIENTS) private readonly clients: Clients) {}

  private readonly items: Item[] = [];

  async createItem(request: CreateItemRequest) {
    const newItem: Item = {
      ...request,
      id: Math.random().toString(36).substring(2, 15),
    };
    const payment = await this.clients.paymentsClient.payments.getPayment.query(
      {
        id: request.paymentId,
      },
    );
    // Use the payment somehow
    console.log(payment);
    this.items.push(newItem);
    return newItem;
  }
}
