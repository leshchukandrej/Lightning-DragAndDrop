/**
 * Created by ctuser on 12.12.2018.
 */
({

    dragStart: function (component, event, helper) {
        var evt = component.getEvent("onDragStart");
        evt.setParam('element', component.get('v.obj'));
        evt.setParam('cmp', component);
        evt.fire()
        document.body.onmousedown = ()=> {
            helper.removeEventListener();
            var evt = component.getEvent('onDragStopped');
            if (evt) {
                evt.fire()
            }
        }

    },

    onDragEnd: function (component, event, helper) {
        console.log('dragEnd p1');
        component.getEvent("onDragEnd").fire();
    },

})