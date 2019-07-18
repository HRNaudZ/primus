const fs = require("fs");

exports.F = {
    searchUser(userId){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);

        var found = false;
        dataObj.forEach(elt=>{
            if(elt.userId==userId){
                found = elt;
                return found;
            }
        });
        return found;
    },

    addUser(userId, lang){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);
        dataObj.push({
                "userId" : userId,
                "lang" : lang,
                "said_registred" : false,
                "userContinued" : false,
                "userYessed" : false,
                "userYessed2" : false,
                "userNoed" : false,
                "userNoed2" : false
        });

        fs.writeFileSync('./data.json', JSON.stringify(dataObj));
    },

    setLang(userId, value){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);

        dataObj.forEach(elt=>{
            if(elt.userId==userId){
                elt.lang = value;
                fs.writeFileSync('./data.json', JSON.stringify(dataObj));
                return;
            }
        });
    },

    setSaidRegistred(userId, value){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);

        dataObj.forEach(elt=>{
            if(elt.userId==userId){
                elt.said_registred = value;
                fs.writeFileSync('./data.json', JSON.stringify(dataObj));
                return;
            }
        });
    },

    setUserContinued(userId){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);

        dataObj.forEach(elt=>{
            if(elt.userId==userId){
                elt.userContinued = true;
                fs.writeFileSync('./data.json', JSON.stringify(dataObj));
                return;
            }
        });
    },

    setUserYessed(userId){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);

        dataObj.forEach(elt=>{
            if(elt.userId==userId){
                elt.userYessed = true;
                fs.writeFileSync('./data.json', JSON.stringify(dataObj));
                return;
            }
        });
    },

    setUserYessed2(userId){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);

        dataObj.forEach(elt=>{
            if(elt.userId==userId){
                elt.userYessed2 = true;
                fs.writeFileSync('./data.json', JSON.stringify(dataObj));
                return;
            }
        });
    },

    setUserNoed(userId){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);

        dataObj.forEach(elt=>{
            if(elt.userId==userId){
                elt.userNoed = true;
                fs.writeFileSync('./data.json', JSON.stringify(dataObj));
                return;
            }
        });
    },

    setUserNoed2(userId){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);

        dataObj.forEach(elt=>{
            if(elt.userId==userId){
                elt.userNoed2 = true;
                fs.writeFileSync('./data.json', JSON.stringify(dataObj));
                return;
            }
        });
    },

    userCount(){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);
        return dataObj.length;
    },

    ourRegistredUsers(){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);
        var found = 0;
        dataObj.forEach(elt=>{
            if(elt.said_registred == true){
                found++;
            }
        });
        return found;
    },
    
    users(){
        var sdata = fs.readFileSync('./data.json');
        var dataObj = JSON.parse(sdata);
        return dataObj;
    },

    getLangFromString(str){
        let lang = 'en';
        switch (str) {
            case "🇫🇷FRANCAIS":
                lang = 'fr';
                break;
            case "🇺🇸ENGLISH":
                lang = 'en';
                break;
            case "🇵🇹PORTUGUES":
                lang = 'pt';
                break;
            case "🇮🇳HINDI":
                lang = 'in';
                break;
        }
        return lang;
    }
}
