(function() {

// FenrirFSパス
var FenrirFSPath = "......";
var FenrirFSPathExe = FenrirFSPath + "\\FenrirFS.exe";
var FenrirFSPathSC = FenrirFSPath + "\\shortcut";

// プロファイル名
var ProfileName = "個人用";

var fso = new ActiveXObject("Scripting.FileSystemObject");
var wsh = new ActiveXObject("WScript.Shell");

// 引数判定
var args = WScript.Arguments;
if ( args.length <= 0 ) {
  return;
}

// フォルダーショートカット用フォルダー作成
if(!fso.FolderExists(FenrirFSPathSC)){
  fso.CreateFolder(FenrirFSPathSC);
}

// ディレクトリorファイル判定
var isDir = function(path){
  if(fso.FolderExists(path)){
    return true;
  }else if(fso.FileExists(path)){
    return false;
  }else{
    return false;
  }
}

for(var i=0; i<args.length; i++){
  if(isDir(args(i))){
    var fileName = fso.GetFileName(args(i));
    var scName = FenrirFSPathSC + "\\" + fileName + ".lnk";
    var sc = wsh.CreateShortcut(scName);
    sc.TargetPath = "file:/" + args(i);
    sc.Save();
    var cmdline = '"' + FenrirFSPathExe + '" --profile "' + ProfileName + '" "' + scName + '"';
    wsh.Run(cmdline);
  }else{
    var cmdline = '"' + FenrirFSPathExe + '" --profile "' + ProfileName + '" --keep "' + args(i) + '"';
    wsh.Run(cmdline);
  }
}

})();
