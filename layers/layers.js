var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a><br />\
    <a href="https://https://www.copernicus.eu/en">Contains modified Copernicus Sentinel data 2025</a><br/>\
    <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Contains public sector information licensed under the Open Government Licence v3.0</a><br />\
    <a href="https://spatialdata.gov.scot/geonetwork/srv/eng/catalog.search#/metadata/4ea30596-8d2c-4be7-a5c3-ecd4fc580a3b">Reproduced by Permission of Ordnance Survey on behalf of HMSO.<br/>© Crown copyright and database right 2025. Ordnance Survey Licence number 100021242</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_FireseveritydNBR_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Fire severity (dNBR)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FireseveritydNBR_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-505873.891636, 7373596.670582, -487451.124956, 7401220.736966]
                            })
                        });
var format_MeandNBRbysubcpt_2 = new ol.format.GeoJSON();
var features_MeandNBRbysubcpt_2 = format_MeandNBRbysubcpt_2.readFeatures(json_MeandNBRbysubcpt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeandNBRbysubcpt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeandNBRbysubcpt_2.addFeatures(features_MeandNBRbysubcpt_2);
var lyr_MeandNBRbysubcpt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeandNBRbysubcpt_2, 
                style: style_MeandNBRbysubcpt_2,
                popuplayertitle: "Mean dNBR (by subcpt)",
                interactive: true,
    title: 'Mean dNBR (by subcpt)<br />\
    <img src="styles/legend/MeandNBRbysubcpt_2_0.png" /> -0.05 - 0.1<br />\
    <img src="styles/legend/MeandNBRbysubcpt_2_1.png" /> 0.1 - 0.25<br />\
    <img src="styles/legend/MeandNBRbysubcpt_2_2.png" /> 0.25 - 0.41<br />\
    <img src="styles/legend/MeandNBRbysubcpt_2_3.png" /> 0.41 - 0.56<br />\
    <img src="styles/legend/MeandNBRbysubcpt_2_4.png" /> 0.56 - 0.71<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_FireseveritydNBR_1.setVisible(true);lyr_MeandNBRbysubcpt_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_FireseveritydNBR_1,lyr_MeandNBRbysubcpt_2];
lyr_MeandNBRbysubcpt_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'FOREST': 'Forest ID', 'COMPTMENT': 'Compartment', 'SUBCOMPT': 'Subcpt', 'BLOCK': 'BLOCK', 'PRI_SPCODE': 'Species 1', 'PRISPECIES': 'PRISPECIES', 'SEC_SPCODE': 'Species 2', 'SECSPECIES': 'SECSPECIES', 'TER_SPCODE': 'Species 3', 'TERSPECIES': 'TERSPECIES', 'PRIPCTAREA': 'PRIPCTAREA', 'SECPCTAREA': 'SECPCTAREA', 'TERPCTAREA': 'TERPCTAREA', 'CULT_CODE': 'CULT_CODE', 'CULTIVATN': 'CULTIVATN', 'PRI_LUCODE': 'PRI_LUCODE', 'PRILANDUSE': 'PRILANDUSE', 'SEC_LUCODE': 'SEC_LUCODE', 'SECLANDUSE': 'SECLANDUSE', 'TER_LUCODE': 'TER_LUCODE', 'TERLANDUSE': 'TERLANDUSE', 'PRIHABCODE': 'PRIHABCODE', 'PRIHABITAT': 'PRIHABITAT', 'SECHABCODE': 'SECHABCODE', 'SECHABITAT': 'SECHABITAT', 'TERHABCODE': 'TERHABCODE', 'TERHABITAT': 'TERHABITAT', 'PRI_PLYEAR': 'Planting year', 'SEC_PLYEAR': 'SEC_PLYEAR', 'TER_PLYEAR': 'TER_PLYEAR', 'PRI_YIELD': 'PRI_YIELD', 'SEC_YIELD': 'SEC_YIELD', 'TER_YIELD': 'TER_YIELD', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'dnbr_mean': 'dNBR Mean', 'dnbr_median': 'dNBR Median', 'dnbr_stdev': 'dNBR Stdev', 'dnbr_min': 'dNBR Min', 'dnbr_max': 'dNBR Max', 'image': 'image', });
lyr_MeandNBRbysubcpt_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'Range', 'FOREST': 'Range', 'COMPTMENT': 'Range', 'SUBCOMPT': 'TextEdit', 'BLOCK': 'Range', 'PRI_SPCODE': 'TextEdit', 'PRISPECIES': 'TextEdit', 'SEC_SPCODE': 'TextEdit', 'SECSPECIES': 'TextEdit', 'TER_SPCODE': 'TextEdit', 'TERSPECIES': 'TextEdit', 'PRIPCTAREA': 'Range', 'SECPCTAREA': 'Range', 'TERPCTAREA': 'Range', 'CULT_CODE': 'TextEdit', 'CULTIVATN': 'TextEdit', 'PRI_LUCODE': 'TextEdit', 'PRILANDUSE': 'TextEdit', 'SEC_LUCODE': 'TextEdit', 'SECLANDUSE': 'TextEdit', 'TER_LUCODE': 'TextEdit', 'TERLANDUSE': 'TextEdit', 'PRIHABCODE': 'TextEdit', 'PRIHABITAT': 'TextEdit', 'SECHABCODE': 'TextEdit', 'SECHABITAT': 'TextEdit', 'TERHABCODE': 'TextEdit', 'TERHABITAT': 'TextEdit', 'PRI_PLYEAR': 'Range', 'SEC_PLYEAR': 'Range', 'TER_PLYEAR': 'Range', 'PRI_YIELD': 'Range', 'SEC_YIELD': 'Range', 'TER_YIELD': 'Range', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'dnbr_mean': 'TextEdit', 'dnbr_median': 'TextEdit', 'dnbr_stdev': 'TextEdit', 'dnbr_min': 'TextEdit', 'dnbr_max': 'TextEdit', 'image': 'ExternalResource', });
lyr_MeandNBRbysubcpt_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'FOREST': 'inline label - visible with data', 'COMPTMENT': 'inline label - visible with data', 'SUBCOMPT': 'inline label - visible with data', 'BLOCK': 'hidden field', 'PRI_SPCODE': 'inline label - visible with data', 'PRISPECIES': 'hidden field', 'SEC_SPCODE': 'inline label - visible with data', 'SECSPECIES': 'hidden field', 'TER_SPCODE': 'inline label - visible with data', 'TERSPECIES': 'hidden field', 'PRIPCTAREA': 'hidden field', 'SECPCTAREA': 'hidden field', 'TERPCTAREA': 'hidden field', 'CULT_CODE': 'hidden field', 'CULTIVATN': 'hidden field', 'PRI_LUCODE': 'hidden field', 'PRILANDUSE': 'hidden field', 'SEC_LUCODE': 'hidden field', 'SECLANDUSE': 'hidden field', 'TER_LUCODE': 'hidden field', 'TERLANDUSE': 'hidden field', 'PRIHABCODE': 'hidden field', 'PRIHABITAT': 'hidden field', 'SECHABCODE': 'hidden field', 'SECHABITAT': 'hidden field', 'TERHABCODE': 'hidden field', 'TERHABITAT': 'hidden field', 'PRI_PLYEAR': 'inline label - visible with data', 'SEC_PLYEAR': 'hidden field', 'TER_PLYEAR': 'hidden field', 'PRI_YIELD': 'hidden field', 'SEC_YIELD': 'hidden field', 'TER_YIELD': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'dnbr_mean': 'inline label - visible with data', 'dnbr_median': 'inline label - visible with data', 'dnbr_stdev': 'inline label - visible with data', 'dnbr_min': 'inline label - visible with data', 'dnbr_max': 'inline label - visible with data', 'image': 'no label', });
lyr_MeandNBRbysubcpt_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
