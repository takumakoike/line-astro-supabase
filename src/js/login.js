// LIFFログイン
import liff from '@line/liff';

// LIFFアプリの初期化処理
liff.init({
    liffId: '2004006139-5eWAxRAO',
}).then( () => {

    // 初期化完了後の処理
    // ①ログイン
    document.getElementById("getInfo").addEventListener("click", () => {
        if(!liff.isLoggedIn()){
            liff.login();
        } else {
            alert("ログイン済みです。ウインドウを閉じます");
            liff.closeWindow();
        }
    })
});