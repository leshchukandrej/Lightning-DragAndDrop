/**
 * Created by ctuser on 11.12.2018.
 */
({

    findIndexTo: function (component, event) {
        var domElement = this.findDraggableElement(event.target);
        if (domElement) {
            console.log(domElement.id);
            return domElement.id;
        } else {
            return null;
        }
    },

    fireOnDropEvent: function (component, indexTo) {
        var evt = component.getEvent("onDrop");
        evt.setParam('cmp', component);
        evt.setParam('indexTo', indexTo);
        evt.fire()
    },

    lightZone: function (component) {
        var dropzone = component.find('dropzone')
        $A.util.addClass(dropzone, 'dragOver');
    },

    hideZone: function (component) {
        var dropzone = component.find('dropzone');
        $A.util.removeClass(dropzone, 'dragOver');
    },

    findDraggableElement: function (domElement) {
        try {
            return domElement.classList.contains('draggable') ? domElement : this.findDraggableElement(domElement.parentElement);
        } catch (e) {
            return null
        }
    },

})