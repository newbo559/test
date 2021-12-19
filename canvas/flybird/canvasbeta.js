(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [
            {name:"flybird_atlas_1", frames: [[0,0,386,218],[240,305,54,38],[296,305,54,38],[352,305,54,38],[244,244,58,59],[388,0,59,59],[0,281,58,59],[388,61,59,59],[60,281,58,59],[120,281,58,59],[388,122,59,59],[180,281,58,59],[388,183,59,59],[304,244,58,59],[364,244,58,59],[0,220,59,59],[424,244,58,59],[61,220,59,59],[449,0,58,59],[449,61,58,59],[122,220,59,59],[449,122,58,59],[183,220,59,59],[449,183,58,59]]}
    ];
    
    
    (lib.AnMovieClip = function(){
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function(positionOrLabel){
            cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
        }
        this.play = function(){
            cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function(positionOrLabel){
            cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
        }
        this.stop = function(){
            cjs.MovieClip.prototype.stop.call(this);
        }
    }).prototype = p = new cjs.MovieClip();
    // symbols:
    
    
    
    (lib.CachedBmp_1 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.bird01 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.bird02 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.bird03 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c02 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c03 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c04 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c05 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c06 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c07 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c08 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c09 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c10 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c11 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c12 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c13 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c14 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c15 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c16 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c17 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c18 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c19 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c20 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.c21 = function() {
        this.initialize(ss["flybird_atlas_1"]);
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();
    // helper functions:
    
    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }
    
    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
        }
    
    
    (lib.wall = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#0000FF","#000000"],[0,1],0,0,0,0,0,152).s().p("AlsXDMAAAguFILZAAMAAAAuFg");
        this.shape.setTransform(36.5,16.3);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = getMCSymbolPrototype(lib.wall, new cjs.Rectangle(0,-131.2,73,295), null);
    
    
    (lib.Path = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // 圖層_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1C1419").s().p("ArKAiQkogOAAgUQAAgTEogOQEpgPGhAAQGiAAEpAPQEoAOAAATQAAAUkoAOQkpAPmiAAQmhAAkpgPg");
        this.shape.setTransform(101.075,4.85);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,202.2,9.7), null);
    
    
    (lib.bridlife = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {boom:9};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // timeline functions:
        this.frame_0 = function() {
            
        }
        this.frame_8 = function() {
            this.gotoAndPlay(0);
        }
        this.frame_9 = function() {
            
        }
        this.frame_29 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1).call(this.frame_9).wait(20).call(this.frame_29).wait(1));
    
        // boom
        this.instance = new lib.c02();
        this.instance.setTransform(-55,-29);
    
        this.instance_1 = new lib.c03();
        this.instance_1.setTransform(-55,-29);
    
        this.instance_2 = new lib.c04();
        this.instance_2.setTransform(-55,-29);
    
        this.instance_3 = new lib.c05();
        this.instance_3.setTransform(-55,-29);
    
        this.instance_4 = new lib.c06();
        this.instance_4.setTransform(-55,-29);
    
        this.instance_5 = new lib.c07();
        this.instance_5.setTransform(-55,-29);
    
        this.instance_6 = new lib.c08();
        this.instance_6.setTransform(-55,-29);
    
        this.instance_7 = new lib.c09();
        this.instance_7.setTransform(-55,-29);
    
        this.instance_8 = new lib.c10();
        this.instance_8.setTransform(-55,-29);
    
        this.instance_9 = new lib.c11();
        this.instance_9.setTransform(-55,-29);
    
        this.instance_10 = new lib.c12();
        this.instance_10.setTransform(-55,-29);
    
        this.instance_11 = new lib.c13();
        this.instance_11.setTransform(-55,-29);
    
        this.instance_12 = new lib.c14();
        this.instance_12.setTransform(-55,-29);
    
        this.instance_13 = new lib.c15();
        this.instance_13.setTransform(-55,-29);
    
        this.instance_14 = new lib.c16();
        this.instance_14.setTransform(-55,-29);
    
        this.instance_15 = new lib.c17();
        this.instance_15.setTransform(-55,-29);
    
        this.instance_16 = new lib.c18();
        this.instance_16.setTransform(-55,-29);
    
        this.instance_17 = new lib.c19();
        this.instance_17.setTransform(-55,-29);
    
        this.instance_18 = new lib.c20();
        this.instance_18.setTransform(-55,-29);
    
        this.instance_19 = new lib.c21();
        this.instance_19.setTransform(-55,-29);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).wait(1));
    
        // btn
        this.instance_20 = new lib.bird01();
        this.instance_20.setTransform(-53,-19);
    
        this.instance_21 = new lib.bird02();
        this.instance_21.setTransform(-53,-19);
    
        this.instance_22 = new lib.bird03();
        this.instance_22.setTransform(-53,-19);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},3).to({state:[]},3).wait(21));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-55,-29,59,59);
    
    
    (lib.補間動畫1 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // 圖層_1
        this.instance = new lib.CachedBmp_1();
        this.instance.setTransform(-96.05,-56.95,0.5,0.5);
    
        this.instance_1 = new lib.Path();
        this.instance_1.setTransform(-0.05,52.15,1,1,0,0,0,101,4.9);
        this.instance_1.alpha = 0.3984;
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-101,-56.9,202.1,113.9);
    
    
    // stage content:
    (lib.flybird = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // birdlife
        this.wall = new lib.wall();
        this.wall.name = "wall";
        this.wall.setTransform(436.5,278.7,1,1,0,0,0,36.5,147.5);
    
        this.birdlife = new lib.bridlife();
        this.birdlife.name = "birdlife";
        this.birdlife.setTransform(119,151,1,1,0,0,0,-1,-8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.birdlife},{t:this.wall}]}).wait(30));
    
        // Objects
        this.car = new lib.補間動畫1("synched",0);
        this.car.name = "car";
        this.car.setTransform(107.05,343.05);
    
        this.timeline.addTween(cjs.Tween.get(this.car).wait(30));
    
        this._renderFirstFrame();
    
    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(281,200,192,200);
    // library properties:
    lib.properties = {
        id: 'FB7D4D1AD1A8B644BDB62BD2B8268B0C',
        width: 550,
        height: 400,
        fps: 30,
        color: "#CCCCCC",
        opacity: 1.00,
        manifest: [
            {src:"images/flybird_atlas_1.png?1638706378030", id:"flybird_atlas_1"}
        ],
        preloads: []
    };
    
    
    
    // bootstrap callback support:
    
    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();
    
    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
    
    p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
    
    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if(!an.bootstrapListeners) {
        an.bootstrapListeners=[];
    }
    
    an.bootstrapCallback=function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if(an.bootcompsLoaded.length > 0) {
            for(var i=0; i<an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };
    
    an.compositions = an.compositions || {};
    an.compositions['FB7D4D1AD1A8B644BDB62BD2B8268B0C'] = {
        getStage: function() { return exportRoot.stage; },
        getLibrary: function() { return lib; },
        getSpriteSheet: function() { return ss; },
        getImages: function() { return img; }
    };
    
    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for(var j=0; j<an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }
    
    an.getComposition = function(id) {
        return an.compositions[id];
    }
    
    
    an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
        var lastW, lastH, lastS=1;		
        window.addEventListener('resize', resizeCanvas);		
        resizeCanvas();		
        function resizeCanvas() {			
            var w = lib.properties.width, h = lib.properties.height;			
            var iw = window.innerWidth, ih=window.innerHeight;			
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
            if(isResp) {                
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                    sRatio = lastS;                
                }				
                else if(!isScale) {					
                    if(iw<w || ih<h)						
                        sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==1) {					
                    sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==2) {					
                    sRatio = Math.max(xRatio, yRatio);				
                }			
            }
            domContainers[0].width = w * pRatio * sRatio;			
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function(container) {				
                container.style.width = w * sRatio + 'px';				
                container.style.height = h * sRatio + 'px';			
            });
            stage.scaleX = pRatio*sRatio;			
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;            
            stage.tickOnUpdate = false;            
            stage.update();            
            stage.tickOnUpdate = true;		
        }
    }
    an.handleSoundStreamOnTick = function(event) {
        if(!event.paused){
            var stageChild = stage.getChildAt(0);
            if(!stageChild.paused || stageChild.ignorePause){
                stageChild.syncStreamSounds();
            }
        }
    }
    an.handleFilterCache = function(event) {
        if(!event.paused){
            var target = event.target;
            if(target){
                if(target.filterCacheList){
                    for(var index = 0; index < target.filterCacheList.length ; index++){
                        var cacheInst = target.filterCacheList[index];
                        if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
                            cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                        }
                    }
                }
            }
        }
    }
    
    
    })(createjs = createjs||{}, AdobeAn = AdobeAn||{});
    var createjs, AdobeAn;