var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WINDUJAYA_1 = new ol.format.GeoJSON();
var features_WINDUJAYA_1 = format_WINDUJAYA_1.readFeatures(json_WINDUJAYA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WINDUJAYA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WINDUJAYA_1.addFeatures(features_WINDUJAYA_1);
var lyr_WINDUJAYA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WINDUJAYA_1, 
                style: style_WINDUJAYA_1,
                popuplayertitle: " WINDUJAYA",
                interactive: true,
                title: '<img src="styles/legend/WINDUJAYA_1.png" />  WINDUJAYA'
            });
var format_JALANWINDUJAYA_2 = new ol.format.GeoJSON();
var features_JALANWINDUJAYA_2 = format_JALANWINDUJAYA_2.readFeatures(json_JALANWINDUJAYA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANWINDUJAYA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANWINDUJAYA_2.addFeatures(features_JALANWINDUJAYA_2);
var lyr_JALANWINDUJAYA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANWINDUJAYA_2, 
                style: style_JALANWINDUJAYA_2,
                popuplayertitle: "JALAN WINDU JAYA",
                interactive: true,
                title: '<img src="styles/legend/JALANWINDUJAYA_2.png" /> JALAN WINDU JAYA'
            });
var format_SUNGAIWINDUJAYA_3 = new ol.format.GeoJSON();
var features_SUNGAIWINDUJAYA_3 = format_SUNGAIWINDUJAYA_3.readFeatures(json_SUNGAIWINDUJAYA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAIWINDUJAYA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAIWINDUJAYA_3.addFeatures(features_SUNGAIWINDUJAYA_3);
var lyr_SUNGAIWINDUJAYA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAIWINDUJAYA_3, 
                style: style_SUNGAIWINDUJAYA_3,
                popuplayertitle: "SUNGAI WINDUJAYA",
                interactive: true,
                title: '<img src="styles/legend/SUNGAIWINDUJAYA_3.png" /> SUNGAI WINDUJAYA'
            });
var format_DATASURVEYPETANI_4 = new ol.format.GeoJSON();
var features_DATASURVEYPETANI_4 = format_DATASURVEYPETANI_4.readFeatures(json_DATASURVEYPETANI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATASURVEYPETANI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DATASURVEYPETANI_4.addFeatures(features_DATASURVEYPETANI_4);
var lyr_DATASURVEYPETANI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DATASURVEYPETANI_4, 
                style: style_DATASURVEYPETANI_4,
                popuplayertitle: "DATA SURVEY PETANI",
                interactive: true,
                title: '<img src="styles/legend/DATASURVEYPETANI_4.png" /> DATA SURVEY PETANI'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_WINDUJAYA_1.setVisible(true);lyr_JALANWINDUJAYA_2.setVisible(true);lyr_SUNGAIWINDUJAYA_3.setVisible(true);lyr_DATASURVEYPETANI_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WINDUJAYA_1,lyr_JALANWINDUJAYA_2,lyr_SUNGAIWINDUJAYA_3,lyr_DATASURVEYPETANI_4];
lyr_WINDUJAYA_1.set('fieldAliases', {'objectid': 'objectid', 'provinsi': 'provinsi', 'kabupaten': 'kabupaten', 'kecamatan': 'kecamatan', 'desa': 'desa', 'kode_dagri': 'kode_dagri', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_JALANWINDUJAYA_2.set('fieldAliases', {'fid': 'fid', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAIWINDUJAYA_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_DATASURVEYPETANI_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WINDUJAYA_1.set('fieldImages', {'objectid': 'TextEdit', 'provinsi': 'TextEdit', 'kabupaten': 'TextEdit', 'kecamatan': 'TextEdit', 'desa': 'TextEdit', 'kode_dagri': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_JALANWINDUJAYA_2.set('fieldImages', {'fid': 'TextEdit', 'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAIWINDUJAYA_3.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_DATASURVEYPETANI_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_WINDUJAYA_1.set('fieldLabels', {'objectid': 'no label', 'provinsi': 'no label', 'kabupaten': 'no label', 'kecamatan': 'no label', 'desa': 'inline label - always visible', 'kode_dagri': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_JALANWINDUJAYA_2.set('fieldLabels', {'fid': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAIWINDUJAYA_3.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_DATASURVEYPETANI_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'inline label - always visible', 'end': 'inline label - always visible', 'altitudeMode': 'inline label - always visible', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - always visible', 'visibility': 'inline label - always visible', 'drawOrder': 'inline label - always visible', 'icon': 'inline label - always visible', });
lyr_DATASURVEYPETANI_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});