(function() {

// FenrirFS.exe �̃p�X
// 64 bit
// var FenrirFSPath = "......\\FenrirFS.exe"

// 32 bit
var FenrirFSPath = "......\\FenrirFS.exe"

// �v���t�@�C����
var ProfileName = "�l�p";

var args = WScript.Arguments;
if ( args.length <= 0 ) {
  return;
}

var wsh = new ActiveXObject("WScript.Shell");
for(var i=0; i<args.length; i++){
  var cmdline = '"' + FenrirFSPath + '" --profile "' + ProfileName + '" "' + args(i) + '"';
  wsh.Run(cmdline);
}

})();
