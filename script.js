setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    
    hour.style.transform = `rotate(${hrotation}deg)`; // Beachten Sie die Verwendung von Backticks ` anstelle von einfachen Anführungszeichen oder doppelten Anführungszeichen.
    minute.style.transform = `rotate(${mrotation}deg)`; // Beachten Sie die Verwendung von Backticks ` anstelle von einfachen Anführungszeichen oder doppelten Anführungszeichen.
    second.style.transform = `rotate(${srotation}deg)`; // Beachten Sie die Verwendung von Backticks ` anstelle von einfachen Anführungszeichen oder doppelten Anführungszeichen.
    
}, 1000);