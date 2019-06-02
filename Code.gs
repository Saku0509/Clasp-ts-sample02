function myFunction() {
    var sheet=SpreadsheetApp.getActiveSheet()  
    var tannka,suuryo,lastRow
    lastRow=sheet.getLastRow()
    for (var i=2; i<=lastRow; i++){
        if (sheet.getRange(i, 4)=="") break
        tannka=sheet.getRange(i, 4).getValue()
        suuryo=sheet.getRange(i, 5).getValue()
        sheet.getRange(i, 6).setValue(tannka*suuryo)
    }
}