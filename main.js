function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/saMH1mVS_/model.json", modelLoaded());
}
function modelLoaded(){
    classifier.classify(gotResults);
}
function gotResults(error, result){
    
}