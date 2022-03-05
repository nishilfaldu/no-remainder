import os
import time
import json
import websockets
import asyncio
import requests

from sensor import *
from typing import Union, List, Optional

class Client:
    # set default query interval as 1 second
    def __init__(self, host_file: str, sensors: List[Sensor], query_interval: Optional[int] = 10,
                 api_url: str = "/data"):
        assert os.path.isfile(host_file), ValueError("Host File must exist to post sensor data")
        with open(host_file, 'r') as f:
            self.hosts = json.load(f)
        self.api_url = api_url

        self.query_interval = query_interval
        self.sensors = sensors
    
    async def transmit(self):
        while True:
            # aggregate all sensor measurements into a single dictionary
            transmit_data = {}
            for sensor in self.sensors:
                name, data = sensor.__class__.__name__, sensor.get_values()
                transmit_data[name] = data
            
            for host in self.hosts:
                url = f"ws://{host['host']}:{host['port']}/{self.api_url}"
                async with websockets.connect(url) as websocket:
                    await websocket.send(json.dumps(transmit_data))
                    r = await websocket.recv()

            time.sleep(self.query_interval)