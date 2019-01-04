/**
 * Created by ctuser on 12.12.2018.
 */
({

    onDrag: function (component, event, helper) {
        event.stopPropagation();
        console.log('dragStart');
        component.set('v.isDragged', true);
        component.set('v.element', event.getParam('element'))
        component.set('v.cmpFrom', event.getParam('cmp'))
    },

    onDrop: function (component, event, helper) {
        event.stopPropagation()
        if (component.get('v.isDragged')) {
            console.log('dropped');
            helper.dropElement(component, event);
            component.set('v.cmpFrom');
            component.set('v.isDragged', false);
        } else {
            alert('This is not correct dropzone!');
        }
    },

    onDragStopped: function(component, event, helper) {
        event.stopPropagation()
        component.set('v.isDragged', false);
        component.set('v.element');
        component.set('v.cmpFrom');
    },

})