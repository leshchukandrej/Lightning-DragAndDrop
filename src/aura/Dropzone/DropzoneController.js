/**
 * Created by ctuser on 11.12.2018.
 */
({

    doInit: function(component, event, helper) {
        component.set('v.id', Math.floor(Math.random() * 100000))
    },

    onDragStart: function (component, event, helper) {
        event.stopPropagation()
        var evt = component.getEvent('onDrag2');
        evt.setParam('element', event.getParam('element'));
        evt.setParam('cmp', component)
        evt.fire()
    },

    onDrop: function (component, event, helper) {
        var indexTo = helper.findIndexTo(component, event);
        helper.fireOnDropEvent(component, indexTo);
        helper.hideZone(component);
    },

    onDragOver: function (component, event, helper) {
        event.preventDefault();
        helper.lightZone(component, event);
    },

    hideZone: function (component, event, helper) {
        helper.hideZone(component);
    },

})