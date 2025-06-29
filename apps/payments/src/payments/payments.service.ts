import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentRequest } from './dto/create-payment.request';
import { Payment } from './schema/payment.schema';

@Injectable()
export class PaymentsService {
  private readonly payments: Payment[] = [];

  createPayment(request: CreatePaymentRequest) {
    const payment: Payment = {
      ...request,
      id: Math.random().toString(36).substring(2, 15),
    };
    this.payments.push(payment);
    return payment;
  }

  getPaymentById(id: string) {
    const payment = this.payments.find((payment) => payment.id === id);
    if (!payment) {
      throw new NotFoundException('Payment not found.');
    }
    return payment;
  }
}
