const fs = require('fs');

class Logger {
    static log(data) {
        data = JSON.stringify({ date: this.dateTime, data: data });
        fs.createReadStream(`public/logs/log_${this.date}.log`, "utf8")
            .on("data", (chunk) => {
                let ws = fs.createWriteStream(`public/logs/log_${this.date}.log`, "utf8");
                let d = chunk + "\n" + data;
                ws.write(d);
            })
            .on("error", () => {
                let ws = fs.createWriteStream(`public/logs/log_${this.date}.log`, "utf8");
                ws.write(data);
            });
    }

    static get date() {
        const date = new Date();
        let m = date.getMonth().toString().length == 1 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        let d = date.getDate().toString().length == 1 ? '0' + date.getDate().toString() : date.getDate(); 
        return date.getFullYear() + '-' + m + '-' + d;  
    }

    static get dateTime() {
        const date = new Date();
        let m = date.getMonth().toString().length == 1 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        let d = date.getDate().toString().length == 1 ? '0' + date.getDate().toString() : date.getDate();
        let h = date.getHours().toString().length == 1 ? '0' + date.getHours().toString() : date.getHours();
        let min = date.getMinutes().toString().length == 1 ? '0' + date.getMinutes().toString() : date.getMinutes();
        let s = date.getSeconds().toString().length == 1 ? '0' + date.getSeconds().toString() : date.getSeconds();
        return date.getFullYear() + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;  
    }
}

module.exports = Logger;