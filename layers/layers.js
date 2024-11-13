var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ne_10m_airports_1 = new ol.format.GeoJSON();
var features_ne_10m_airports_1 = format_ne_10m_airports_1.readFeatures(json_ne_10m_airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airports_1.addFeatures(features_ne_10m_airports_1);
var lyr_ne_10m_airports_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ne_10m_airports_1, 
                style: style_ne_10m_airports_1,
                popuplayertitle: "ne_10m_airports",
                interactive: true,
    title: 'ne_10m_airports<br />\
    <img src="styles/legend/ne_10m_airports_1_0.png" /> major<br />\
    <img src="styles/legend/ne_10m_airports_1_1.png" /> mid<br />\
    <img src="styles/legend/ne_10m_airports_1_2.png" /> small<br />'
        });

lyr_ESRITopo_0.setVisible(true);lyr_ne_10m_airports_1.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_ne_10m_airports_1];
lyr_ne_10m_airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', });
lyr_ne_10m_airports_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'TextEdit', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', });
lyr_ne_10m_airports_1.set('fieldLabels', {'type': 'inline label - always visible', 'name': 'inline label - always visible', 'iata_code': 'inline label - always visible', 'wikipedia': 'inline label - always visible', });
lyr_ne_10m_airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});