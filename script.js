//東京ドームの面積（平方メートル）
const TokyoDomeArea = 46755;

//万博大屋根リングの面積
const LandmarksArea = [
    61035.55, //万博大屋根リング
    5119, //インテックス大阪 3号館
    6729, //インテックス大阪 4号館
    4728, //インテックス大阪 5号館
    9000, //幕張メッセ 9ホール
    1790.26, //福岡サンパレスホール
    1134 //仙台サンプラザホール
];

function CalculateOtherLandmark() {
    let TokyoDomeCounts = document.getElementById('TokyoDomeCounts').value;
    let SelectedLandmark = document.getElementById('SelectLandmark');
    let ResultText = document.getElementById('ResultText');
    //選択されたドロップダウンリストのインデックスを取得
    let SelectedLandmarkIndex = SelectedLandmark.selectedIndex;
    //選択されたドロップダウンリストの文字を取得
    let SelectedLandmarkText = SelectedLandmark.options[SelectedLandmarkIndex].textContent;

    let CalculatedArea = TokyoDomeArea * TokyoDomeCounts;
    let LandmarkCount = CalculatedArea / LandmarksArea[SelectedLandmarkIndex];
    //小数点第2位を四捨五入
    let LandmarkCountRound = Math.round(LandmarkCount * 10) / 10;

    ResultText.innerHTML = `${SelectedLandmarkText} ${LandmarkCountRound}個分（約${CalculatedArea}m&sup2）`;
}