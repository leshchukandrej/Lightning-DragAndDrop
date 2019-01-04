# Lightning-DragAndDrop

Components that gives you components opportunity to uses drag and drop features.

Example of using this components:

'''

    <c:DragAndDrop>

        <!-- <YourHTMLcode1> -->

        <!--To move items between different dropzones in one context, you need to push them into one DragAndDrop body -->

        <!--First dropzone-->

            <c:Dropzone elements="{!v.elementsToDrag1}">

                <!-- <YourHTMLcode2> -->

                    <aura:iteration items="{!v.itemsToDrag1}" var="item" indexVar="i">

                        <!-- <YourHTMLcode3> -->

                        <!--To move items from specific dropzones, you need to push them into Dropzone body -->

                        <!--To have feature for changing items order inside Dropzone, in Draggable fill in index attribute value-->
                                
                            <c:Draggable obj="{!item}" index="{!i}">

                                <!-- <YourHTMLcode4/> -->

                            </c:Draggable>

                        <!-- </YourHTMLcode3> -->

                    </aura:iteration>

                <!-- </YourHTMLcode2> -->

            </c:Dropzone>

        <!--Second dropzone-->

        <c:Dropzone elements="{!v.elementsToDrag2}">

            <!-- <YourHTMLcode2> -->

            <aura:iteration items="{!v.itemsToDrag2}" var="item" indexVar="i">

                <!-- <YourHTMLcode3> -->

                <c:Draggable obj="{!item}" index="{!i}">

                    <!-- <YourHTMLcode4/> -->

                </c:Draggable>

                <!-- </YourHTMLcode3> -->

            </aura:iteration>

            <!-- </YourHTMLcode2> -->

        </c:Dropzone>


        <!-- </YourHTMLcode1> -->

    </c:DragAndDrop>
    
'''
