import { Message, Whatsapp } from "venom-bot";

class Handlers {
    static onGenerateQrCode(
        base64Qrimg: string,
        asciiQR: string,
        attempts: number,
        urlCode: string | undefined
    ) {
        console.log("QRCode generated");
    }
    static async onMessage(client: Whatsapp, message: Message) {
        if (process.env.ADMIN_ID === message.chat.contact.id)
            await client.sendText(message.from, "Enviando currículo");
    }
}

export default Handlers;
