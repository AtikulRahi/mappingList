var list = ee.List([1,2,3,4])
var appliedMap = list.map(function(vi){
  return ee.Feature(null, {"value": vi})
})
var listFc = ee.FeatureCollection(appliedMap)
print(listFc)

Export.table.toDrive({
  collection: listFc,
  description: 'FcShapefile',
  fileFormat: 'CSV', 
  folder: "GEE_exports"
});