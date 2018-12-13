/**
 * Created by ctuser on 11.12.2018.
 */
({

    findIndexTo: function(component, event) {
        var domElement = this.findDraggableElement(event.target);
        if (domElement) {
            console.log(domElement.id);
            return domElement.id;
        } else {
            return null;
        }
    },

    fireOnDropEvent: function(component, indexTo) {
        var evt = component.getEvent("onDrop");
        evt.setParam('element', component);
        evt.setParam('indexTo', indexTo);
        evt.fire()
    },

    lightZone: function(component, event) {
        var dragzone = component.find('dragzone')
        $A.util.addClass(dragzone, 'dragOver');
    },

    hideZone: function(component, event) {
        var dragzone = component.find('dragzone');
        $A.util.removeClass(dragzone, 'dragOver');
    },

    findDraggableElement: function(domElement) {
        try {
            return domElement.classList.contains('dragElement')? domElement : this.findDraggableElement(domElement.parentElement);
        } catch (e) {
            return null
        }
    }

})