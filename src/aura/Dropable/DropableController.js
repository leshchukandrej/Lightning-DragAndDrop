/**
 * Created by ctuser on 11.12.2018.
 */
({

    onDrag: function (component, event, helper) {
        component.set('v.draggedFromHere', 2)
    },

    onDrop: function (component, event, helper) {
        setTimeout($A.getCallback(() => {

        var indexTo = helper.findIndexTo(component, event);
        helper.fireOnDropEvent(component, indexTo);
        helper.hideZone(component, event);
        }), 0)
    },

    onDragEnd: function (component, event, helper) {
        setTimeout($A.getCallback(() => {
        console.log('dragEnd p2');
        var evt = component.getEvent("onDragEnd2");
        evt.setParam('element', component);
        evt.fire()
        }), 0)
    },

    onDragOver: function (component, event, helper) {
        event.preventDefault();
        helper.lightZone(component, event);
    },

    lightZone: function (component, event, helper) {
        // console.log(event.target.parentElement.nodeName, event.target.parentElement.className, event.target.parentElement.id)
        var el = event.target;

            helper.lightZone(component, event);


    },

    hideZone: function (component, event, helper) {
        helper.hideZone(component, event);
    }

})