import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentRequest } from './dto/create-payment.request';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  createPayment(@Body() request: CreatePaymentRequest) {
    return this.paymentsService.createPayment(request);
  }
}
