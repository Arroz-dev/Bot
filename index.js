const {Client, LocalAuth} = require('whatsapp-wed.js')
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
});

//genera un codigo qr
client.on('qr',qr=>{
  qrcode.generate(qr,{Small: true});
  console.log('El codigo QR fue generado, escanealo en tu whatsapp');
});

client.on('message',message=>{
  console.log('mensaje recivido: ', message.body);
  if(message.body == 'Hola'){
    message.reply('Hola en que puedo ayudarte');
  }
});

client.initialize();
