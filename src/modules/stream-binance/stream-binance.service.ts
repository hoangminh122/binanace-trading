import { Injectable } from '@nestjs/common';

const WebSocket = require('ws');

@Injectable()
export class StreamBinanceService {
    private ws;
    constructor(){
        console.log("test")
        this.ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1d');
    }

    testStream(){
        this.ws.on('message', function incoming(data) {
           let a = JSON.parse(data);
           console.log(a.k.c)
        });
    }
}
