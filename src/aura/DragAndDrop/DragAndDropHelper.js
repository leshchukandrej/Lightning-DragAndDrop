/**
 * Created by ctuser on 13.12.2018.
 */
({

    dropElement: function(component, event) {
        var cmp = event.getParam('element');
        var elements = cmp.get('v.elements');
        var element = component.get('v.element')
        var index = event.getParam('indexTo');

        elements = this.remove(elements, element);
        this.push(elements, element, index);
        setTimeout($A.getCallback(() => {
                cmp.set('v.elements', elements);
            }), 0)

        this.validateDragging(component, cmp);
    },

    remove: function(elements, element) {
        return elements.filter(el => {
            return JSON.stringify(el) != JSON.stringify(element)
        })
    },

    push: function(elements, element, index) {
        if (index) {
            elements.splice(index, 0, element);
        } else {
            elements.push(element);
        }
    },

    validateDragging: function (thisCmp, eventCmp) {
        if (!eventCmp.get('v.draggedFromHere')) {
            thisCmp.set('v.isDragged', true);
            eventCmp.set('v.draggedFromHere', false);
            return
        }
        thisCmp.set('v.draggedFromHere', false);
    }

})