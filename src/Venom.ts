import { CatchQR, create } from "venom-bot";

export function init(onGenerateQrCode: CatchQR) {
    return create(
        //session
        "sender-cv", //Pass the name of the client you want to start the bot
        //catchQR
        onGenerateQrCode,
        // statusFind
        (statusSession, session) => {
            console.log("Status Session: ", statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser
            //Create session wss return "serverClose" case server for close
            console.log("Session name: ", session);
        },
        // options
        {
            folderNameToken: "tokens", //folder name when saving tokens
            mkdirFolderToken: "", //folder directory tokens, just inside the venom folder, example:  { mkdirFolderToken: '/node_modules', } //will save the tokens folder in the node_modules directory
            headless: true, // Headless chrome
            devtools: false, // Open devtools by default
            useChrome: true, // If false will use Chromium instance
        }
        // BrowserSessionToken
        // To receive the client's token use the function await clinet.getSessionTokenBrowser()
        // {
        //   WABrowserId: '"UnXjH....."',
        //   WASecretBundle:
        //     '{"key":"+i/nRgWJ....","encKey":"kGdMR5t....","macKey":"+i/nRgW...."}',
        //   WAToken1: '"0i8...."',
        //   WAToken2: '"1@lPpzwC...."',
        // }
        // BrowserInstance
        // (browser, waPage) => {
        //   console.log("Browser PID:", browser.process().pid);
        //   waPage.screenshot({path: 'screenshot.png'});
        // }
    );
}
