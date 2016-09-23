// Remember current unit settings and then set units to
// the value expected by this script
var originalUnit = preferences.rulerUnits
preferences.rulerUnits = Units.PIXELS
// Create a new 2x4 inch document and assign it to a variable
//var docRef = app.documents.add( 128, 128 )
var docRef = app.documents.add(256,256,149,"exportedLayer", NewDocumentMode.RGB,DocumentFill.TRANSPARENT);
// Create a new art layer containing text
var artLayerRef = docRef.artLayers.add() 
artLayerRef.name = "Background"
activeDocument.selection.selectAll();

var myColor = new SolidColor();  
myColor.rgb.red = 40
myColor.rgb.green = 40
myColor.rgb.blue = 40;  
//app.documents.add( 100, 100, 72, "tmp", NewDocumentMode.RGB, DocumentFill.TRANSPARENT );  
//app.activeDocument.selection.selectAll();  
app.activeDocument.selection.fill( myColor );  
//ApplyStyle

docRef.artLayers["Background"].resize( 98 , 98, AnchorPosition.MIDDLECENTER  );

var idPlc = charIDToTypeID( "Plc " ); 
var desc11 = new ActionDescriptor();  
var idnull = charIDToTypeID( "null" );
var ref = new ActionReference();

 
var selectedFile = app.openDialog();
//opens dialog to select file

desc11.putPath( idnull, new File(selectedFile) );
var idFTcs = charIDToTypeID( "FTcs" ); 
var idQCSt = charIDToTypeID( "QCSt" );   
var idQcsa = charIDToTypeID( "Qcsa" ); 
desc11.putEnumerated( idFTcs, idQCSt, idQcsa );
var idOfst = charIDToTypeID( "Ofst" );     
var desc12 = new ActionDescriptor();     
var idHrzn = charIDToTypeID( "Hrzn" );    
var idPxl = charIDToTypeID( "#Pxl" );      
desc12.putUnitDouble( idHrzn, idPxl, 0.000000 );     
var idVrtc = charIDToTypeID( "Vrtc" );    
var idPxl = charIDToTypeID( "#Pxl" );    
desc12.putUnitDouble( idVrtc, idPxl, 0.000000 );
var idOfst = charIDToTypeID( "Ofst" );
desc11.putObject( idOfst, idOfst, desc12 );
executeAction( idPlc, desc11, DialogModes.NO );

var iconLayerName = docRef.activeLayer.name;

// Create a new art layer containing text
var artLayerRef = docRef.artLayers.add()
artLayerRef.kind = LayerKind.TEXT

//textLayerRef.name = "my text"



// Set the contents of the text layer.
var textItemRef = artLayerRef.textItem
var Start =prompt("btnLabel","","What is the Button Label");
// Pops open a dialog for the user to
// set the output folder
//textItemRef.contents = idnull;
textItemRef.contents = Start;








textItemRef.justification = Justification.CENTER
var FillColor = new SolidColor;
FillColor.rgb.hexValue = "cccccc"; 
textItemRef.color = FillColor;
textItemRef.size = 18;
textItemRef.position = Array(128, 230);


var sel_outputFolder = "~/Desktop/Buttons";
var outputFolder = Folder(sel_outputFolder).selectDlg("Select a folder for the output files");

function saveJPEG( doc, saveFile, qty ) {  
     var saveOptions = new PNGSaveOptions( );  
     saveOptions.embedColorProfile = true;  
     saveOptions.quality = qty;   
     doc.saveAs( saveFile, saveOptions, true );  
}  
  
    
//We have 4 button types;
//Normal, Highlighted, Pressed, Disabled
//*****CREATE NORMAL BUTTON****//
//First we create the normal button
//We set the background style to normal
docRef.artLayers["Background"].applyStyle("btnStyle_Normal");
//Then we set the Icon Style to Normal, this is the palced layer
//We know the layer name of the placed Icon, because we stored in earlier in the iconLayerName variable
docRef.artLayers[iconLayerName].applyStyle("btnIcon_Normal");
//saveJPEG( app.activeDocument, new File('~/Desktop/btn_' + Start + 'Normal.png'), 10 );  
saveJPEG( app.activeDocument, new File(outputFolder + '/btn_' + Start + 'Normal.png'), 10 );  
//*****CREATE HIGHLIGHTED BUTTON****//
docRef.artLayers["Background"].applyStyle("btnStyle_Highlighted")
docRef.artLayers[iconLayerName].applyStyle("btnIcon_Highlighted");
//saveJPEG( app.activeDocument, new File('~/Desktop/btn_' + Start + 'Highlighted.png'), 10 );  
saveJPEG( app.activeDocument, new File(outputFolder + '/btn_' + Start + 'Highlighted.png'), 10 );  
//*****CREATE HIGHLIGHTED BUTTON****//
docRef.artLayers["Background"].applyStyle("btnStyle_Disabled")
docRef.artLayers[iconLayerName].applyStyle("btnIcon_Disabled");
//saveJPEG( app.activeDocument, new File('~/Desktop/btn_' + Start + 'Disabled.png'), 10 );  
saveJPEG( app.activeDocument, new File(outputFolder + '/btn_' + Start + 'Disabled.png'), 10 );  
//*****CREATE HIGHLIGHTED BUTTON****//
docRef.artLayers["Background"].applyStyle("btnStyle_Pressed")
docRef.artLayers[iconLayerName].applyStyle("btnIcon_Pressed");
//saveJPEG( app.activeDocument, new File('~/Desktop/btn_' + Start + 'Pressed.png'), 10 );  
saveJPEG( app.activeDocument, new File(outputFolder + '/btn_' + Start + 'Pressed.png'), 10 );  
 
  


