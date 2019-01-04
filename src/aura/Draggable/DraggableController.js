/**
 * Created by ctuser on 12.12.2018.
 */
({

    dragStart: function (component, event, helper) {
        var evt = component.getEvent("onDragStart");
        evt.setParam('element', component.get('v.obj'));
        evt.setParam('cmp', component);
        evt.fire()
        document.body.onmousedown = () => {
            helper.removeEventListener();
            var evt = component.getEvent('onDragStopped');
            if (evt) {
                evt.fire()
            }
        }
    },

    dragEnd: function(component, event, helper) {
        helper.removeEventListener();
        var evt = component.getEvent('onDragStopped');
        if (evt) {
            evt.fire()
        }
    },

    lightElement: function(component, event, helper) {
        $A.util.addClass(component.find('draggable'), 'lighted')
    },

    hideElement: function(component) {
        $A.util.removeClass(component.find('draggable'), 'lighted')
    }

})