/**
 * Created by ctuser on 12.12.2018.
 */
({

    dragStart: function(component, event, helper) {
        var evt = component.getEvent("onDrag");
        evt.setParam('element', component.get('v.obj'))
        evt.fire()
    },

    onDragEnd: function(component, event, helper) {
        console.log('dragEnd p1');
        setTimeout($A.getCallback(() => {
            component.getEvent("onDragEnd").fire();
        }))
    }

})