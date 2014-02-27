define([
    "ember",
    "ehbs!team/project/explore/item",
    "ehbs!team/project/_project-nav"
], function(Ember) {
    'use strict';

    return Ember.Route.extend({
        model: function() {
            return this.store.find('group');
        }
    });
});
