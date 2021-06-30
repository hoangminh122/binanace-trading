import { Controller, Get } from '@nestjs/common';
import { StreamBinanceService } from './stream-binance.service';

@Controller('stream-binance')
export class StreamBinanceController {
    constructor(
        private streamBinanceService:StreamBinanceService
    ){

    }

    @Get()
    test()
    {
        this.streamBinanceService.testStream();
    }

}
