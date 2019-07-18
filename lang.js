exports.L = {
    getHomeMsg(lang) {
        let msg = "";
        switch (lang) {
            case 'en':
                msg = "Primus is available in [ 🇺🇸ENGLISH, 🇫🇷FRANCAIS, 🇵🇹PORTUGUES, 🇮🇳HINDI ]\n\
                \n\
❗ Read this closely ! \n\
\n\
✅ Primus is a bot which teaches you many ways of earning money online.\n\
\n\
❌Primus does not pay users, but shows them legit methods for earning money on internet.\n\
\n\
✅All methods that Primus will show you are LEGIT and verified.\n\
\n\
✅For each method, Primus will provide proof thread on BeerMoneyForum, so you can check it's legitimacy.\n\
\n\
💰So, If you are ready to earn money online press <CONTINUE>.";
                break;


            case 'fr':
                msg = "Primus est disponible en [ 🇺🇸ENGLISH, 🇫🇷FRANCAIS, 🇵🇹PORTUGUES, 🇮🇳HINDI ]\n\
\n\
❗ Lisez ce qui suit attentivement !\n\
\n\
✅ Primus est un bot qui vous apprend les différents moyens de vous faire de l'argent en ligne.\n\
\n\
❌Primus ne paie pas ses utilisateurs, mais leur montre plutôt les méthodes pour gagner de l'argent sur internet.\n\
\n\
✅Toutes les méthodes montrées par Primus sont Légitimes et Vérifiées.\n\
\n\
✅Pour chaque méthode, Primus donnera le lien de preuve sur BeerMoneyForum, pour que vous puissiez vérifier vous même.\n\
\n\
💰Donc, Si vous êtes prêt à gagner de l'argent en ligne appuyer sur <CONTINUE>.";
                break;

            case 'pt':
                msg = "Primus está disponível em [ 🇺🇸ENGLISH, 🇫🇷FRANCAIS, 🇵🇹PORTUGUES, 🇮🇳HINDI ]\n\
\n\
❗ Leia com atenção !\n\
\n\
✅ Primus é um bot que ensina diferentes maneiras de ganhar dinheiro online.\n\
\n\
❌A Primus não paga seus usuários, mas mostra os métodos para ganhar dinheiro na internet.\n\
\n\
✅Todos os métodos mostrados por Primus são legítimos e verificados.\n\
\n\
✅Para cada método, a Primus fornecerá o link de prova no BeerMoneyForum, para que você possa verificar a si mesmo.\n\
\n\
💰Então, se você está pronto para ganhar dinheiro online, pressione <CONTINUE>.";
                break;

            case 'in':
                msg = "Primus mein upalabdh hai [🇺🇸ENGLISH, 🇫🇷FRANCAIS, 🇵🇹PORTUGUES, 🇮🇳HINDEE]\n\
\n\
❗ dhyaan se padhen!\n\
\n\
✅ Primus ek bot hai jo aapako onalain paise kamaane ke vibhinn tareeke sikhaata hai.\n\
\n\
❌Primus apane upayogakartaon ko bhugataan nahin karata hai, balki unhen intaranet par paisa banaane ke tareeke dikhaata hai.\n\
\n\
✅ Primus dvaara sikhaee gaee sabhee vidhiyaan vaidh aur satyaapit hain.\n\
\n\
✅pratyek vidhi ke lie, Primus BeerMoneyForum par prooph link dega, taaki aap khud kee jaanch kar saken.\n\
\n\
💰to, agar aap paise kamaane ke lie taiyaar hain to onalain pres <CONTINUE>.";
                break;
        }

        return msg;
    },

    getCongratsMsg(lang) {
        let msg = "";
        switch (lang) {
            case 'en':
                msg = "🏆 Bravo, You made the right choice.";
                break;
            case 'fr':
                msg = "🏆 Bravo, Vous avez fait le bon choix.";
                break;
            case 'pt':
                msg = "🏆 Bravo, você fez a escolha certa.";
                break;
            case 'in':
                msg = "🏆 braavo, aapane sahee chunaav kiya.";
                break;
        }
        return msg;
    },

    getHGIntroMsg(lang) {
        let msg = "";
        switch (lang) {
            case 'en':
                msg = "Today, I will show you how to earn money with Honeygain.";
                break;
            case 'fr':
                msg = "Aujourd'hui, je vais vous montrer comment gagner de l'argent avec Honeygain.";
                break;
            case 'pt':
                msg = "Hoje, mostrarei a você como ganhar dinheiro com a Honeygain.";
                break;
            case 'in':
                msg = "aaj, main aapako dikhaoonga ki Honeygain ke saath paise kaise kamaen.";
                break;
        }
        return msg;
    },

    getHGDescMsg(lang) {
        let msg = "";
        switch (lang) {
            case 'en':
                msg = "🔥Honeygain is a service that utilizes your unused internet bandwidth and helps you earn passive income.\n\
                \n🔥There is currently an Android and Windows App.\n\
                \n🔥You earn credits for every KB of data you share which is later converted into USD.\n\
                \n🔥It currently has a min payout of 20$ through Paypal.\n\
                \n🔥The payout rate is 1$ for 10GB.";
                break;
            case 'fr':
                msg = "🔥Honeygain est un service qui utilise votre bande passante Internet inutilisée et vous permet de gagner un revenu passif. \n\
                \n🔥Il existe actuellement une application Android et Windows. \n\
                \n🔥Vous gagnez des crédits pour chaque Ko de données que vous partagez et qui est ensuite converti en USD. \n\
                \n🔥Il a actuellement un paiement minimum de 20$ via Paypal. \n\
                \n🔥Le taux de paiement est de 1$ pour 10Go.";
                break;
            case 'pt':
                msg = "🔥A Honeygain é um serviço que usa sua largura de banda de Internet não utilizada e permite que você ganhe receita passiva.\n\
                \n🔥Atualmente, há um aplicativo para Android e Windows.    \n\
                \n🔥Você ganha créditos por cada KB de dados que você compartilha, que é então convertido em USD. \n\
                \n🔥Atualmente, ele tem um pagamento mínimo de US $ 20 via Paypal. \n\
                \n🔥A taxa de pagamento é de US $ 1 por 10GB.";
                break;
            case 'in':
                msg = "🔥Honeygain ek aisee seva hai jo aapake aprayukt intaranet baindavidth ka upayog karatee hai aur aapako nishkriy aay arjit karane kee anumati detee hai. \n\
                \n🔥vartamaan mein ek android aur windows anuprayog hai.\n\
                \n🔥aapake dvaara saajha kie gae pratyek kb deta ke lie aap kredit kamaate hain, jise baad mein usd mein badal diya jaata hai.\n\
                \n🔥vartamaan mein usake paas pepail ke maadhyam se $ 20 ka nyoonatam bhugataan hai.\n\
                \n🔥10gb ke lie bhugataan dar $ 1 hai.";
                break;
        }
        return msg;
    },

    getDeviceQ(lang) {
        let msg = "";
        switch (lang) {
            case 'en':
                msg = "Which devices do you have?";
                break;
            case 'fr':
                msg = "Quels appareils possédez-vous?";
                break;
            case 'pt':
                msg = "Quais dispositivos você tem?";
                break;
            case 'in':
                msg = "aapake paas kaun se upakaran hain?";
                break;
        }
        return msg;
    },

    getCallToRegisterMsg(lang) {
        let msg = "";
        switch (lang) {
            case 'en':
                msg = "✅ Now, to start earning you must create an account by pressing on <Create My Account>.\n\
                \n❗ Use <gethoney> as coupon code to get extra $5.";
                break;
            case 'fr':
                msg = "✅ Maintenant, pour commencer à gagner vous devez créer un compte en appuyant sur <Create My Account>\n\
                \n❗ Utiliser le coupon <gethoney> pour recevoir un bonus de 5$.";
                break;
            case 'pt':
                msg = "✅ Agora, para começar a ganhar, você deve criar uma conta pressionando <Create My Account>.\n\
                \n❗ Use o cupom <gethoney> para receber um bônus de $ 5.";
                break;
            case 'in':
                msg = "✅ ab, kamaee karane ke lie aapako <Create My Account> dabaakar ek khaata banaana hoga.\n\
                \n❗ $ 5 ka bonas praapt karane ke lie <gethoney> koopan ka upayog karen.";
                break;
        }
        return msg;
    },

    getCheckAccountCreation(lang) {
        let msg = "";
        switch (lang) {
            case 'en':
                msg = "Have you created your new account ?";
                break;
            case 'fr':
                msg = "Avez vous créé votre nouveau compte ? ";
                break;
            case 'pt':
                msg = "Você criou sua nova conta ?";
                break;
            case 'in':
                msg = "kya aapane apana naya khaata banaaya hai ?";
                break;
        }
        return msg;
    },

    getWellDoneMsg(lang) {
        let msg = "";
        switch (lang) {
            case 'en':
                msg = "🏆 Well done !";
                break;
            case 'fr':
                msg = "🏆 Bien joué !";
                break;
            case 'pt':
                msg = "🏆 Bem feito !";
                break;
            case 'in':
                msg = "🏆 bahut badhiya !";
                break;
        }

        return msg;
    },

    getCallToDownloadMsg(lang) {
        let msg = "";
        switch (lang) {
            case 'en':
                msg = "Now, download the app for your devices.";
                break;
            case 'fr':
                msg = "Maintenant, téléchargez l'application pour vos appareils.";
                break;
            case 'pt':
                msg = "Agora, faça o download do aplicativo para seus dispositivos.";
                break;
            case 'in':
                msg = "ab, apane upakaranon ke lie eplikeshan daunalod karen.";
                break;
        }

        return msg;
    },

    getCheckDownload(lang) {
        let msg = "";
        switch (lang) {
            case 'en':
                msg = "Have you downloaded the App ?";
                break;
            case 'fr':
                msg = "Avez vous téléchargé l'application ? ";
                break;
            case 'pt':
                msg = "Você baixou o aplicativo ?";
                break;
            case 'in':
                msg = "kya aapane aip daunalod kiya hai ?";
                break;
        }
        return msg;
    },

    getShowUsageMsg(lang) {
        let msg = "";
        switch (lang) {
            case 'en':
                msg = "On Android 📱:\n\n\
                1⃣ Open Honeygain App and Log in with the account you created.\n\
                2⃣ Let the App Running.\n\
                3⃣ You can quit the App but without closing it.\n\
                4⃣ It is all !  You will be earning now !\n\
                5⃣ When you will reach the minimum payout you can withdraw to your paypal account (More payments methods are comming soon)\n\
                \n\
On Windows 💻:\n\n\
                1⃣ Install the app by double-clicking on the executable you downloaded.\n\
                2⃣ After Install, Log In the App with the account you created.\n\
                3⃣ Right Click on Honeygain's Icon, in taskbar and click on <Go To Dashboard>.\n\
                4⃣ So, on your dashboard you can see how much you are earning.\n\
                5⃣ And if you used the <gethoney> coupon code you should have at least 5$.\n\
                6⃣ You can close the dashboard page and let the app running in background.\n\
                7⃣ When you will reach the minimum payout you can withdraw to your PayPal account (More payments methods are comming soon)\n\
                \n\
                Proof Here : https://www.beermoneyforum.com/threads/honeygain-reviews-scam-or-legit.41642/page-18 \n\n\
                ❗ If you have any question, contact @royloomer";
                break;
            case 'fr':
                msg = "Sur Android 📱 : \n\n\
                1⃣ Ouvrez l'application Honeygain et connectez-vous avec le compte que vous avez créé. \n\
                2⃣ Laisser l'application en cours d'exécution. \n\
                3⃣ Vous pouvez quitter l’application mais sans la fermer. \n\
                4⃣ C’est tout !! L'application vous fera gagner de l'argent. \n\
                5⃣ Lorsque vous atteignez le solde minimum de paiement, vous pouvez retirer l'argent sur votre compte PayPal (plusieurs méthodes de paiement arrivent bientôt) \n\
                \n\
Sous Windows 💻 : \n\n\
                1⃣ Installez l’application en double-cliquant sur l’exécutable que vous avez téléchargé. \n\
                2⃣ Après l’installation, connectez-vous à l’application avec le compte que vous avez créé. \n\
                3⃣ Cliquez avec le bouton droit de la souris sur l’icône de Honeygain, dans la barre des tâches, puis cliquez sur <Go To Dashboard>. \n\
                4⃣ Ainsi, sur votre tableau de bord, vous pouvez voir combien vous gagnez. \n\
                5⃣ Et si vous avez utilisé le code de coupon <gethoney>, vous devez avoir au moins 5 $ \n\
                6⃣ Vous pouvez fermer la page du tableau de bord et laisser l'application s'exécuter en arrière-plan. \n\
                7⃣ Lorsque vous atteignez le paiement minimum, vous pouvez retirer sur votre compte paypal (plusieurs méthodes de paiement arrivent bientôt) \n\
                \n\
                La preuve ici: https://www.beermoneyforum.com/threads/honeygain-reviews-scam-or-legit.41642/page-18 \n\n\
                ❗ Si vous avez des questions, contactez @royloomer ";
                break;
            case 'pt':
                msg = "No Android 📱 : \n\n\
                1⃣ Abra o aplicativo Honeygain e faça login com a conta que você criou. \n\
                2⃣ Deixe o aplicativo em execução. \n\
                3⃣ Você pode sair do aplicativo, mas não fechá-lo. \n\
                4⃣ É isso !! O aplicativo economizará seu dinheiro. \n\
                5⃣ Quando você atingir o saldo mínimo de pagamento, poderá sacar o dinheiro da sua conta paypal (vários métodos de pagamento estão disponíveis em breve) \n\
                \n\
No Windows 💻 : \n\n\
                1⃣  Instale o aplicativo clicando duas vezes no executável que você baixou. \n\
                2⃣ Após a instalação, faça o login no aplicativo com a conta que você criou. \n\
                3⃣  Clique com o botão direito do mouse no ícone Honeygain na barra de tarefas e clique em <Go To Dashboard>. \n\
                4⃣ Assim, no seu painel, você pode ver o quanto você ganha. \n\
                5⃣ E se você usou o código de cupom <gethoney>, você deve ter pelo menos $ 5 \n\
                6⃣ Você pode fechar a página do painel e deixar o aplicativo ser executado em segundo plano. \n\
                7⃣ Quando você alcança o pagamento mínimo, você pode retirar para sua conta PayPal (vários métodos de pagamento estão chegando em breve) \n\
                \n\
                A prova aqui: https://www.beermoneyforum.com/threads/honeygain-reviews-scam-or-legit.41642/page-18 \n\n\
                ❗ Se você tiver alguma dúvida, entre em contato com @royloomer";
                break;
            case 'in':
                msg = "📱 Android par: \n\n\
                1⃣  Honeygain aip kholen aur aapake dvaara banae gae khaate ke saath sain in karen.\n\
                2⃣ aavedan ko chhod den.\n\
                3⃣ aap eplikeshan se baahar nikal sakate hain, lekin ise band nahin kar sakate. \n\
                4⃣ bas itana hee !! eplikeshan aapako paise bachaega. \n\
                5⃣ jab aap nyoonatam bhugataan shesh tak pahunch jaate hain, to aap apane PayPal khaate se paise nikaal sakate hain (kaee bhugataan vidhiyaan jald hee aa rahee hain)\n\
                \n\
💻 Windows par: \n\n\
                1⃣  doublai aapake dvaara daunalod kie gae nishpaadan yogy par dabal-klik karake eplikeshan instol karen. \n\
                2⃣ sthaapana ke baad, aapake dvaara banae gae khaate ke saath aavedan mein log in karen. \n\
                3⃣ taaskabaar par haneegain aaikan par rait-klik karen aur <Go To Dashboard> par klik karen. \n\
                4⃣ to, apane daishabord par, aap dekh sakate hain ki aap kitana jeetate hain. \n\
                5⃣ aur yadi aapane <gethoney> koopan kod ka upayog kiya hai, to aapake paas kam se kam $ 5 _ hona chaahie \n\
                6⃣ aap daishabord prshth ko band kar sakate hain aur eplikeshan ko prshthabhoomi mein chalane de sakate hain. \n\
                7⃣ jab aap nyoonatam bhugataan shesh tak pahunch jaate hain, to aap apane PayPal khaate se paise nikaal sakate hain (kaee bhugataan vidhiyaan jald hee aa rahee hain)\n\
                \n\
                yahaan saboot: https://www.beermoneyforum.com/threads/honeygain-reviews-scam-or-legit.41642/page-18 \n\n\
                ❗ any yadi aapake koee prashn hain, to krpaya @royloomer se sampark karen";
                break;
        }
        return msg;
    },

}
