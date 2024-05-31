var list = ee.List([1,2,3,4])
var appliedMap = list.map(function(vi){
  return ee.Feature(null, {"value": vi})
})
var listFc = ee.FeatureCollection(appliedMap)
print(listFc)

