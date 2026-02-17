Dim shell, dir
Set shell = CreateObject("WScript.Shell")
dir = Left(WScript.ScriptFullName, InStrRev(WScript.ScriptFullName, "\") - 1)
shell.Run "cmd /k ""cd /d " & dir & " && node server.js""", 1, False
WScript.Sleep 2000
shell.Run "explorer.exe """ & dir & "\index.html""", 1, False