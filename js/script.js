var controller = new ScrollMagic.Controller();
var pinItem;
var scene;
var slideCollections = [];
var controller = new ScrollMagic.Controller();
var activeSection;
var sectionId
 
function startApp(){

    // SCROLLMAGIC DOM POINTERS
    var mainSideScrollers = [
        {pointerParent:'noSmAdventure_mask'},
    ]
    // DEFINE SCROLLMAGIC SCENES
    init_Collection({selector: 'id', data: mainSideScrollers[0]});
}

function init_Collection(obj){
    //[LOCAL COLLECTION DATA]
    var _localData;
     //[LOOKUP COLLECTION]
    if(obj.selector == 'id'){
        _localData = document.getElementById(obj.data.pointerParent);
    }else{
        _localData = document.getElementsByClassName(obj.data.pointerParent);
    }

    // [PASS COLLECTION]
    create_Scenes(_localData,obj);
}

function create_Scenes(ele,obj){

    new ScrollMagic.Scene({
        triggerElement: ele,
        triggerHook: "onLeave",
        duration: "50%"
    })
    .setPin(ele)
    .setTween( animationLibrary('opacity',ele ) )
    .addIndicators()
    .addTo(controller)
    .on("enter", function (event) {
        //sectionId = event.target.triggerElement();
        //active = sectionId.id
        //console.log(active +  '  enter');
    })
    /*.on("leave", function (event) {
        var getposParent = sectionId.children;
        var getpos = getposParent[0].children;

        for (let index = 0; index < getpos.length; index++) {
            if(getpos[index].getAttribute('data-check') == 'false'){
                getpos[index].dataset.check = 'true';
            }
        }

    })*/
    /*.on("progress", function (event) {
        var getposParent = sectionId.children;
        var getpos = getposParent[0].children;

        for (let index = 0; index < getpos.length; index++) {
            // TEST IF CONTENT IS IN VIEWPORT
            if (isInViewport(getpos[index]) ){
                // TEST DATA ATRRIBUTE ** TRUE PROCEED , FALSE IGNORE
                if(getpos[index].getAttribute('data-check') == 'true'){
                    console.log( 'run animation' );
                    getpos[index].dataset.check = 'false';
                }else{
                    //console.log( 'ignore animation' );
                }
            }
            
            
            
            
        }
     });*/
} 



function animationLibrary(animationType, pointer){

    var ele;

    if(typeof pointer == 'string'){
        ele = document.getElementById(pointer);
    }else{
        ele = pointer;
    }

    if(animationType == 'left'){
        return  new TweenMax.to( ele, 0,   {x:'200%',delay: .29})
    }else if(animationType == 'opacity'){
        return  new TweenMax.to( ele, .25,   {opacity:1})
    }
}

function triggerPos( el, buffer ){
    var rect = el.getBoundingClientRect()
    return rect;
}

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.left >= 0 - bounding.width / 3 &&
        bounding.left >=  - bounding.width 
    )
};

// SECTION OBJ ----------------------------
// ----------------------------------------
/*function obj(index,el,rect){
    this._index = index;
    this._el = el;
    this._rect = rect;
}
    // GET ------------------------------------
    obj.prototype.GET_x = function() {
        return this._index;
    };
    obj.prototype.GET_el = function() {
        return this._el;
    };
    obj.prototype.GET_x = function() {
        return this._rect.x;
    };
    obj.prototype.GET_y = function() {
        return this._rect.y;
    };
    obj.prototype.GET_width = function() {
        return this._rect.width;
    };
    obj.prototype.GET_height = function() {
        return this._rect.height;
    };

    // UPDATE ------------------------------------
    obj.prototype.SET_x = function(input) {
        this._index;
    };
    obj.prototype.SET_el = function(input) {
        return this._el;
    };
    obj.prototype.SET_x = function(input) {
        return this._rect.x;
    };
    obj.prototype.SET_y = function(input) {
        return this._rect.y;
    };
    obj.prototype.SET_width = function(input) {
        return this._rect.width;
    };
    obj.prototype.SET_height = function(input) {
        return this._rect.height;
    };

function triggerPos( el, buffer ){
    var rect = el.getBoundingClientRect()
    return rect.x + rect.width;
}
*/

window.addEventListener("load", startApp);

