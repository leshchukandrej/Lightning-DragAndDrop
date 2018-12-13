/**
 * Created by ctuser on 12.12.2018.
 */
({

    onDrag: function (component, event, helper) {
        component.set('v.draggedFromHere', true)
        console.log('dragStart');
        component.set('v.element', event.getParam('element'))
    },

    onDrop: function (component, event, helper) {
        // debugger
        if (component.get('v.draggedFromHere')) {
            console.log('dropped');
            helper.dropElement(component, event);
        }

    },

    setElementIndex: function (component, event, helper) {
        if (component.get('v.draggedFromHere')) {
            var index = event.getParam('element');
            component.set('v.elementIndex', index);
        }
    },

    onDragEnd: function (component, event, helper) {
        debugger
        console.log('dragEnd p3');

        var isDragged = component.get('v.isDragged');
        if (isDragged) {
            var cmp = event.getParam('element');
            var element = component.get('v.element')
            var elements = cmp.get('v.elements');
            elements = helper.remove(elements, element)
            setTimeout($A.getCallback(() => {
                cmp.set('v.elements', elements);
            }), 0)
            cmp.set('v.draggedFromHere', false)
            component.set('v.isDragged', false);
        }
        component.set('v.draggedFromHere', false);

    },

})