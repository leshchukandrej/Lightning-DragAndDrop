/**
 * Created by ctuser on 13.12.2018.
 */
({

    dropElement: function (component, event) {
        var cmpTo = event.getParam('cmp');
        var index = event.getParam('indexTo');
        var elements = cmpTo.get('v.elements');
        var element = component.get('v.element')
        var cmpFrom = component.get('v.cmpFrom');

        if (cmpFrom.get('v.id') === cmpTo.get('v.id') && !index) {
        } else {
            elements = this.remove(elements, element);
            this.push(elements, element, index);
            cmpTo.set('v.elements', elements);
        }
        if (cmpFrom.get('v.id') !== cmpTo.get('v.id')) {
            this.removeElementFromOriginalDropzone(cmpFrom, element);
        }
    },

    remove: function (elements, element) {
        return elements.filter(el => {
            return JSON.stringify(el) != JSON.stringify(element)
        })
    },

    push: function (elements, element, index) {
        if (index) {
            elements.splice(index, 0, element);
        } else {
            elements.push(element);
        }
    },

    removeElementFromOriginalDropzone: function (cmpFrom, element) {
        cmpFrom.set('v.elements', this.remove(cmpFrom.get('v.elements'), element));
    }

})