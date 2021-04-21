import { init } from "./Venom";
import { Whatsapp } from "venom-bot";

import Handlers from "./Handlers";

class App {
    init() {
        init(Handlers.onGenerateQrCode).then(this.start).catch(console.error);
    }

    private start(client: Whatsapp) {
        client.onMessage((message) => Handlers.onMessage(client, message));
    }
}

export default new App();
