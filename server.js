const TelegramBot = require('node-telegram-bot-api');
const lang = require('./lang');
const funcs = require('./functions');

// replace the value below with the Telegram token you receive from @BotFather
const token = '';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

var reg_btn = {
    'reply_markup': {
        'inline_keyboard': [
            [{ text: "➕CREATE MY ACCOUNT➕", url: "https://dashboard.honeygain.com/ref/ROYNO384" }]
        ]

    }
}

var discord_btn = {
    'reply_markup': {
        'inline_keyboard': [
            [{ text: "Join Discord Server", url: "https://discord.gg/ckEyWMg" }]
        ]

    }
}

var dld_btn = {
    'reply_markup': {
        'inline_keyboard': [
            [{ text: "📱 Android", url: "https://play.google.com/store/apps/details?id=com.honeygain.make.money" }],
            [{ text: "🖥 Windows", url: "https://download.honeygain.com/windows-app/honeygain_setup.exe" }]
        ]

    }
}

var done_btn = {
    'reply_markup': {
        'keyboard': [
            ["✅ YES", "❌ NO"]
        ]
    }
}

var done_btn2 = {
    'reply_markup': {
        'keyboard': [
            ["✅ YES ✅", "❌ NO ❌"]
        ]
    }
}


var thanks_btn = {
    'reply_markup': {
        'keyboard': [
            ["🙏 THANKS 🙏"]
        ]
    }
}

bot.on('message', (msg) => {
    var chatId = msg.chat.id;
    var msgText = msg.text;
    var userId = msg.from.id;

    if(msgText == "/usercount_rl"){
        bot.sendMessage(chatId, funcs.F.userCount());
        return;
    }

    if(msgText == "/regusercount_rl"){
        bot.sendMessage(chatId, funcs.F.ourRegistredUsers());
        return;
    }

    if(msgText == "/owner_rl"){
        bot.sendMessage(chatId, "Roy Loomer #CIC");
        return;
    }

    if (msgText == "/start") {
        let start_opt = {
            'reply_markup': {
                'keyboard': [
                    ["🇺🇸ENGLISH", "🇫🇷FRANCAIS"],
                    ["🇵🇹PORTUGUES", "🇮🇳HINDI"]
                ]
            }
        }
        bot.sendMessage(chatId, "❓", start_opt);
    } else {
        if (msgText == "🇺🇸ENGLISH" || msgText == "🇫🇷FRANCAIS" || msgText == "🇵🇹PORTUGUES" || msgText == "🇮🇳HINDI") {
            let userLang = funcs.F.getLangFromString(msgText);
            if (!funcs.F.searchUser(userId)) {
                let continue_btn = {
                    'reply_markup': {
                        'keyboard': [
                            ["🚀CONTINUE🚀"]
                        ]
                    }
                }
                funcs.F.addUser(userId, userLang);
                bot.sendMessage(chatId, lang.L.getHomeMsg(userLang), continue_btn);
            } else {
                funcs.F.setLang(userId, userLang);
            }
        } else {
            if (msgText == "🚀CONTINUE🚀") {
                if (funcs.F.searchUser(userId)) {
                    if (funcs.F.searchUser(userId).userContinued) return;

                    funcs.F.setUserContinued(userId);

                    let userLang = funcs.F.searchUser(userId).lang;
                    bot.sendMessage(chatId, lang.L.getCongratsMsg(userLang));
                    setTimeout(() => {
                        bot.sendMessage(chatId, lang.L.getHGIntroMsg(userLang));
                    }, 1000);
                    setTimeout(() => {
                        bot.sendMessage(chatId, lang.L.getHGDescMsg(userLang));
                    }, 4000);
                    setTimeout(() => {
                        bot.sendMessage(chatId, lang.L.getCallToRegisterMsg(userLang), reg_btn);
                    }, 25000);
                    setTimeout(() => {
                        bot.sendMessage(chatId, lang.L.getCheckAccountCreation(userLang), done_btn);
                    }, 60000);
                }
            } else {
                if (msgText == "❌ NO") {
                    if (funcs.F.searchUser(userId)) {
                        if (funcs.F.searchUser(userId).userYessed) return;

                        if (funcs.F.searchUser(userId).userNoed) return;

                        funcs.F.setUserNoed(userId);

                        let userLang = funcs.F.searchUser(userId).lang;

                        bot.sendMessage(chatId, lang.L.getCallToRegisterMsg(userLang), reg_btn);
                        setTimeout(() => {
                            bot.sendMessage(chatId, lang.L.getCheckAccountCreation(userLang), done_btn);
                        }, 60000);
                    }
                } else if (msgText == "✅ YES") {

                    if (funcs.F.searchUser(userId).userYessed) return;

                    funcs.F.setUserYessed(userId);

                    funcs.F.setSaidRegistred(userId, true);
            
                    let userLang = funcs.F.searchUser(userId).lang;

                    bot.sendMessage(chatId, lang.L.getWellDoneMsg(userLang));

                    setTimeout(() => {
                        bot.sendMessage(chatId, lang.L.getCallToDownloadMsg(userLang), dld_btn);
                    }, 2000);

                    setTimeout(() => {
                        bot.sendMessage(chatId, lang.L.getCheckDownload(userLang), done_btn2);
                    }, 40000);
                } else {
                    if (msgText == "❌ NO ❌") {
                        if (funcs.F.searchUser(userId)) {
                            if (funcs.F.searchUser(userId).userYessed2) return;

                            if (funcs.F.searchUser(userId).userNoed2) return;

                            funcs.F.setUserNoed2(userId);

                            let userLang = funcs.F.searchUser(userId).lang;

                            bot.sendMessage(chatId, lang.L.getCallToDownloadMsg(userLang), dld_btn);

                            setTimeout(() => {
                                bot.sendMessage(chatId, lang.L.getCheckDownload(userLang), done_btn2);
                            }, 40000);
                        }
                    } else if (msgText == "✅ YES ✅") {
                        if (funcs.F.searchUser(userId).userYessed2) return;
                    
                        funcs.F.setUserYessed2(userId);
                        
                        let userLang = funcs.F.searchUser(userId).lang;

                        bot.sendMessage(chatId, lang.L.getWellDoneMsg(userLang));

                        setTimeout(() => {
                            bot.sendMessage(chatId, lang.L.getShowUsageMsg(userLang), thanks_btn);
                        }, 2000);

                        setTimeout(() => {
                            bot.sendMessage(chatId, "It is the end of Honeygain's method ! If you want, you can Join A Discord Server About Earning Online.", discord_btn);
                        }, 40000)
                    } else {
                        if (msgText == "🙏 THANKS 🙏") {
                            bot.sendMessage(chatId, "You are welcome ! Stay tunned for the next tricks !", discord_btn);
                        }
                    }
                }
            }
        }
    }
});
