from abc import abstractmethod
from typing import Optional, Callable

import subprocess
import platform

class Sensor:
    def __init__(self, data_func: Optional[Callable] = None):
        self.data_func = data_func
        self.name = "Generic_Sensor"

    @abstractmethod
    def get_values(self):
        # if existing function is available, just run that
        if self.data_func is not None:
            return {
                "Measurement": self.data_func()
            }
        # TODO: insert logic to load data from sensor into JSON
        return {}


class TemperatureSensor(Sensor):
    def __init__(self):
        # TODO: Write logic to pull temperature data from gyro
        pass


class HumiditySensor(Sensor):
    def __init__(self):
        # TODO: Write logic to pull humidity data from Pi
        pass


class UptimeSensor(Sensor):
    def __init__(self, server_host: str):
        self.server_host = server_host
        self.name = "Server_Uptime"

    def get_values(self):
        param = '-n' if platform.system().lower() == 'windows' else '-c'

        command = ['ping', param, '1', self.server_host]
        return {
            "Measurement": not subprocess.call(command),
            "Server_Host": self.server_host
        }
