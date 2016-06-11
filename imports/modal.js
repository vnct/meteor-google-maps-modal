import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './modal.html';


Template.MyModal.onCreated(function(){
  // TODO : get params
});

Template.MyMap.onCreated(function() {

    GoogleMaps.ready('myMap', function(map) {
   // Add a marker to the map once it's ready
   var marker = new google.maps.Marker({
     position: map.options.center,
     map: map.instance
   });
 });
});

Template.MyMap.helpers({

  myMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }

  }
});
Template.MyMap.onRendered(function() {
   GoogleMaps.load();
});






// Template.MyMap.onCreated(function() {
//     GoogleMaps.load();
//     GoogleMaps.ready('myMap', function(map) {
//         // Add a marker to the map once it's ready
//         var marker = new google.maps.Marker({
//             position: map.options.center,
//             map: map.instance
//         });
//     });
// });
//
// Template.MyMap.helpers({
//     myMapOptions: function() {
//         var data = Template.currentData(self.view);
//         if (!data) return;
//         // Make sure the maps API has loaded
//         if (data && GoogleMaps.loaded()) {
//             // Map initialization options
//             return {
//                 center: new google.maps.LatLng(-37.8136, 144.9631),
//                 zoom: 17
//             };
//         }
//     }
// });
