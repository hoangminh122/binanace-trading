import { Module } from '@nestjs/common';
import { StreamBinanceController } from './stream-binance.controller';
import { StreamBinanceService } from './stream-binance.service';

@Module({
  imports:[],
  controllers:[StreamBinanceController],
  providers: [
    StreamBinanceService
  ]
})
export class StreamBinanceModule {}
