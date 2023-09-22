declare global {
    var FLIGHT_API: string;
    var BOOKING_API: string;
    var QUEUE_API: string;
    var API_KEY_DEFAULT: string;
    var API_KEY_GROUPE_1: string;
    var API_KEY_GROUPE_2: string;
    var API_KEYS: any[];
}

global.API_KEY_DEFAULT = 'a9a98a82-3325-43c4-9436-6c9bd2b21c4f';
global.API_KEY_GROUPE_1 = '919b2405-6afc-4d4a-8bcc-b7c8bf556f39';
global.API_KEY_GROUPE_2 = 'b2643948-cc9f-4111-a557-49159f162a0e';
global.API_KEYS = [
    { "API_KEY_DEFAULT": API_KEY_DEFAULT},
    { "API_KEY_GROUPE_1": API_KEY_GROUPE_1 },
    { "API_KEY_GROUPE_2": API_KEY_GROUPE_2 },
]
global.FLIGHT_API = "http://localhost:8081"
global.BOOKING_API = "http://localhost:8082"
global.QUEUE_API = "http://localhost:8085"
  
export default global;